import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'newapp';
  items: string[] = [];
  msg: string = 'You pressed me!!!';
  constructor() {}
  buttonPressed() {
    return this.items.push(this.msg);
  }
}
