import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from '../models/subject';

@Injectable({
  providedIn: 'root'
})

export class SubjectService {

  private apiUrl = 'http://localhost:3000/subjects';

  constructor(private httpClient: HttpClient) { }
  
  getSubjects(): Observable<Subject[]> {
    return this.httpClient.get<Subject[]>(this.apiUrl);
  }
}
