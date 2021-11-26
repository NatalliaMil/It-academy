import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'newapp';
  msg: string;
  constructor() {
    this.msg = '';
  }
  buttonPressed() {
    this.msg = 'You pressed me!!!';
    return this.msg;
  }
}
