import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  data = {
    temperature: 0,
    city: '',
  };
  city: any;
  subject: Subject<any> = new Subject<any>();
  constructor() {}
  changeWeather(data: any) {
    this.subject.next(data);
  }
}
