import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-additional',
  template: `<h2>Добро пожаловать, {{ name }}!</h2>
    <p>{{ message }}</p>`,
  styles: [
    `
      h2,
      p {
        color: blue;
      }
    `,
  ],
})
export class AdditionalComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() name: string = '';
  @Input() message: string = '';
}
