import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';

const appRoutes: Routes =[
    {path:'', redirectTo: '/students', pathMatch: 'full'},
    {path: 'students', component: StudentComponent},
    {path: 'teachers', component: TeacherComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}