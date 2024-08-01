import { Component } from '@angular/core';
import { SubjectComponent } from '../../layout/subject/subject.component';
import { ExercisesComponent } from '../../layout/exercises/exercises.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule , SubjectComponent , ExercisesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  renderComponent = 'subject';
  activeButton = 'subject';

  renderSubject() {
    this.renderComponent = 'subject';
    this.activeButton = 'subject';
  }

  renderExercises() {
    this.renderComponent = 'exercises';
    this.activeButton = 'exercises';
  }
}
