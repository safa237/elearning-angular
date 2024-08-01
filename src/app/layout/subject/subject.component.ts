/*import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Subject } from '../../models/subject';
import { SubjectService } from '../../requestApi/subject.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent implements OnInit {
  subjects: Subject[] = [];
  newSubject : Subject = {} as Subject;
  constructor(private subjectService : SubjectService)
  {}
  ngOnInit(): void {
    this.getSubjects()
  }
  getSubjects(){
    this.subjectService.getSubjects().subscribe(sub => {
      this.subjects = sub;
    })
  }
}*/


import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  subjects: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getSubjects()
  }

  getSubjects(){
    this.http.get('assets/db.json').subscribe((response: any) => {
      this.subjects = response.subjects;
    })
  }
}
