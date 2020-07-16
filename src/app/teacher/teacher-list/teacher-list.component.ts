import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  rows: Teacher[];
  columns = [{ prop: 'name' }, { name: 'id' }, { name: 'username' }, {name: 'email'}];
  
  constructor(private teacherService: TeacherService) {

 }

 ngOnInit(){
   this.connect();

 }

 connect() {
   
  this.teacherService.getTeacher().subscribe(res=>{
   this.rows = res;
  });
 }
 
 disconnect() {}
 
}
