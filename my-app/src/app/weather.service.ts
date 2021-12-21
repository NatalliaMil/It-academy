import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  weather: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  constructor() {}
  changeWeather(weather: number) {
    this.weather.next(weather);
  }
}
