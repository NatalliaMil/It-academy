import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'planner5';

  list = [
    {
      firstName: 'Ivan',
      lastName: 'Ivanov',
      age: 24,
    },
    {
      firstName: 'Petr',
      lastName: 'Petrov',
      age: 27,
    },
    {
      firstName: 'Nikolay',
      lastName: 'Sidorov',
      age: 30,
    },
    {
      firstName: 'Fedor',
      lastName: 'Afanasevich',
      age: 33,
    },
  ];
}
