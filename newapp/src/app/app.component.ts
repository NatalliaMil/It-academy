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
  name: string = 'Александр';
  message: string = 'Мой дополнительный компонент синего цвета';
}
