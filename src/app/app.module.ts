import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherListComponent } from './teacher/teacher-list/teacher-list.component';
import { TeacherDetailsComponent } from './teacher/teacher-details/teacher-details.component';
import { DropdownDirective } from './header/dropdown.directive';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './student/student.service';
import { TeacherService } from './teacher/teacher.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentComponent,
    StudentListComponent,
    StudentDetailsComponent,
    TeacherComponent,
    TeacherListComponent,
    TeacherDetailsComponent,
    DropdownDirective 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxDatatableModule,
    AppRoutingModule,
    HttpClientModule,
    
    
  ],
  providers: [StudentService, TeacherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
