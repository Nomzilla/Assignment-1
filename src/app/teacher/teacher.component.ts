import { Component, OnInit } from '@angular/core';
import { TeacherService } from './teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
  providers: [TeacherService]
})
export class TeacherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
