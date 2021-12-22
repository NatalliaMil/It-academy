import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { WeatherService } from '../weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css'],
})
export class CityListComponent implements OnInit {
  cities = [];
  data = {
    temperature: 0,
    city: '',
  };
  constructor(
    private http: HttpClient,
    public weatherservice: WeatherService,
    private router: Router
  ) {}
  ngOnInit(): void {
    const domain = 'http://api.airvisual.com';
    const endPointAllCities = '/v2/cities?state=California&country=USA';
    const APIKey = '&key=70cf142d-93ae-47b2-a378-9ebdb2b51916';
    const url = `${domain}${endPointAllCities}${APIKey}`;

    this.http.get(url).subscribe((data: any) => {
      this.cities = data.data.map((element: any) => element.city);
    });
  }
  showWeather(city: any) {
    this.router.navigate(['showweather']);
    const domain = 'http://api.airvisual.com';
    const endPointCity = '/v2/city';
    const APIKey = '70cf142d-93ae-47b2-a378-9ebdb2b51916';
    const urlCity = `${domain}${endPointCity}`;
    const APIParams = {
      city,
      state: 'California',
      country: 'USA',
      key: APIKey,
    };

    this.http
      .get(urlCity, { params: APIParams })
      .pipe(map((response: any) => response.data))
      .subscribe((value: any) => {
        this.data.temperature = value.current.weather.tp;
        this.data.city = value.city;
        this.weatherservice.changeWeather(this.data);
      });
  }
}
