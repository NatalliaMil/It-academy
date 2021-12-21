import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  cities = [];
  weatherForm = false;
  weather = 0;

  constructor(
    private http: HttpClient,
    public weatherservice: WeatherService
  ) {}

  showCities() {
    const domain = 'http://api.airvisual.com';
    const endPointAllCities = '/v2/cities?state=California&country=USA';
    const APIKey = '&key=70cf142d-93ae-47b2-a378-9ebdb2b51916';
    const url = `${domain}${endPointAllCities}${APIKey}`;

    this.http.get(url).subscribe((data: any) => {
      this.cities = data.data.map((element: any) => element.city);
    });
  }

  showWeather(city: any) {
    this.weatherForm = true;
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
      .pipe(map((response: any) => response.data.current.weather))
      .subscribe((data: any) => {
        this.weather = data.tp;
        this.weatherservice.changeWeather(this.weather);
      });
  }
}

//http://api.airvisual.com/v2/cities?state=California&country=USA&key=70cf142d-93ae-47b2-a378-9ebdb2b51916
//http://api.airvisual.com/v2/city?city=Alpine&state=California&country=USA&key=70cf142d-93ae-47b2-a378-9ebdb2b51916
