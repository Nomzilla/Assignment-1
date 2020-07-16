import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Student } from './student.model'

@Injectable()

export class StudentService {
    
    private serviceUrl = 'http://jsonplaceholder.typicode.com/users';

    constructor(private http: HttpClient) {

    }

    getStudent(): Observable<Student[]> {
        return this.http.get<Student[]>(this.serviceUrl);
    }
}