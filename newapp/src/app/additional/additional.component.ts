import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-additional',
  templateUrl: './additional.component.html',
  styleUrls: ['./additional.component.css'],
})
export class AdditionalComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() name: string = '';
  @Input() message: string = '';
}
