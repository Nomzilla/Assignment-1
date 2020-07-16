import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { Observable } from 'rxjs/Observable';
import { StudentService } from '../student.service';

import 'rxjs/add/observable/of';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent  implements OnInit{
  rows: Student[];

 columns = [{ prop: 'name' }, { name: 'id' }, { name: 'username' }, {name: 'email'}];

 

  constructor(private studentService: StudentService) {
     
  }

  ngOnInit(){
    this.connect();

  }

  connect() {
    
   this.studentService.getStudent().subscribe(res=>{
    this.rows = res;
   });
  }
  
  disconnect() {}
  
}
