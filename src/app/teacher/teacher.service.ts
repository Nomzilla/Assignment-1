import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Teacher } from './teacher.model'

@Injectable()

export class TeacherService {
    
    private serviceUrl = 'http://jsonplaceholder.typicode.com/users';

    constructor(private http: HttpClient) {

    }

    getTeacher(): Observable<Teacher[]> {
        return this.http.get<Teacher[]>(this.serviceUrl);
    }
}