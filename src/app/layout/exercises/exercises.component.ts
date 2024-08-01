import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragDropModule, CdkDragRelease } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-exercises',
  standalone: true,
  imports: [CommonModule, FormsModule, DragDropModule],
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent {
  showIndividual: boolean = false;
  showSeveral: boolean = false;
  isAddingChoice = false;
  newChoiceText = '';
  currentQuestionType: 'single' | 'multiple' | null = null;
  showSuccessMessage = false;
  showErrorMessage = false; 
  
  singleChoiceOptions: { text: string, isEditable: boolean }[] = [];
  multipleChoiceOptions: { text: string, isEditable: boolean }[] = [];
  questionText = ''; 

  onDragReleased(event: CdkDragRelease, buttonType: string) {
    if (buttonType === 'singleChoice') {
      this.showIndividual = true;
      this.showSeveral = false;
      this.currentQuestionType = 'single';
    } else if (buttonType === 'multiChoice') {
      this.showIndividual = false;
      this.showSeveral = true;
      this.currentQuestionType = 'multiple';
    }
    event.source._dragRef.reset();
  }

  showAddChoiceForm(type: 'single' | 'multiple') {
    this.isAddingChoice = true;
    this.currentQuestionType = type;
  }

  saveChoice() {
    if (this.newChoiceText.trim()) {
      if (this.currentQuestionType === 'single') {
        this.singleChoiceOptions.push({ text: this.newChoiceText, isEditable: false });
      } else if (this.currentQuestionType === 'multiple') {
        this.multipleChoiceOptions.push({ text: this.newChoiceText, isEditable: false });
      }
      this.newChoiceText = '';
      this.isAddingChoice = false; 
    }
  }

  cancelAddChoice() {
    this.newChoiceText = '';
    this.isAddingChoice = false;
  }

  saveQuestion() {
    if (!this.questionText.trim()) {
      this.showErrorMessage = true; 
      setTimeout(() => this.showErrorMessage = false, 3000); 
      return;
    }
    console.log('Saved question with choices:', this.currentQuestionType === 'single' ? this.singleChoiceOptions : this.multipleChoiceOptions);
    this.showSuccessMessage = true; 
    setTimeout(() => this.showSuccessMessage = false, 3000); 
  }

  cancelQuestion() {
    if (this.currentQuestionType === 'single') {
      this.singleChoiceOptions = [];
    } else if (this.currentQuestionType === 'multiple') {
      this.multipleChoiceOptions = [];
    }
    this.newChoiceText = '';
    this.isAddingChoice = false;
    this.showIndividual = false;
    this.showSeveral = false;
    this.currentQuestionType = null; 
    this.questionText = ''; 
  }
}
