import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.css'],
})
export class ElementListComponent implements OnInit {
  @Input() element: any;
  constructor() {}
  ngOnInit(): void {}
}
