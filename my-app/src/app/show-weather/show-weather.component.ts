import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-show-weather',
  templateUrl: './show-weather.component.html',
  styleUrls: ['./show-weather.component.css'],
})
export class ShowWeatherComponent implements OnInit {
  temperature = 0;
  city = '';

  constructor(public weatherservice: WeatherService) {}

  ngOnInit(): void {
    this.weatherservice.subject.subscribe((data) => {
      this.temperature = data.temperature;
      this.city = data.city;
    });
  }
}
