import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  formData = {};
  formDataTrue = false;
  questionnaire = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    workPlace: new FormArray([new FormControl('', [Validators.required])]),
  });
  get workPlace() {
    return this.questionnaire.get('workPlace') as FormArray;
  }
  addWorkPlace() {
    this.workPlace.push(new FormControl('', [Validators.required]));
  }
  submit() {
    this.formData = JSON.stringify(this.questionnaire.value);
    this.formDataTrue = true;
  }
}
