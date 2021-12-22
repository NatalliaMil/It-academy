import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { WeatherService } from '../weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  constructor(private router: Router) {}

  showCities() {
    this.router.navigate(['citylist']);
  }
}
