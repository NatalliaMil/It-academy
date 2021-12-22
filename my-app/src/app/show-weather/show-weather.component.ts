import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-show-weather',
  templateUrl: './show-weather.component.html',
  styleUrls: ['./show-weather.component.css'],
})
export class ShowWeatherComponent implements OnInit {
  weather = 0;

  constructor(public weatherservice: WeatherService) {}

  ngOnInit(): void {
    this.weatherservice.weather.subscribe((value) => {
      this.weather = value;
    });
  }
}
