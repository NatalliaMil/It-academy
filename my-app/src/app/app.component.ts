import { Component } from '@angular/core';

const input = [-6, 5, 7, 10];
function sum(input: any): any {
    if (input.length === 0) {
        return 0;
    } else {
       return input.shift() + sum(input);
    }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  constructor() {
    sum(input);
    } 
}
