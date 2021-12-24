import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  countries = [];
  selectedCountry = '';
  state = [];
  selectedState = '';
  cities = [];
  selectedCity = '';
  temperature = 0;
  humidity = 0;
  windSpeed = 0;
  atmospherePressure = 0;
  city = '';
  showTemperature = false;
  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit() {
    const domain = 'http://api.airvisual.com';
    const endPointAllCountries = '/v2/countries?';
    const APIKey = '&key=70cf142d-93ae-47b2-a378-9ebdb2b51916';
    const url = `${domain}${endPointAllCountries}${APIKey}`;

    this.http.get(url).subscribe((data: any) => {
      this.countries = data.data.map((element: any) => element.country);
    });
  }

  onChange($event: any) {
    console.log($event);
    this.showTemperature = false;
    this.cities = [];
    this.state = [];
    this.selectedState = '';
    this.selectedCity = '';
  }
  changeState() {
    const domain = 'http://api.airvisual.com';
    const endPointState = `/v2/states?country=${this.selectedCountry}`;
    const APIKey = '&key=70cf142d-93ae-47b2-a378-9ebdb2b51916';
    const url = `${domain}${endPointState}${APIKey}`;

    this.http.get(url).subscribe((data: any) => {
      this.state = data.data.map((element: any) => element.state);
    });
  }
  changeCity() {
    const domain = 'http://api.airvisual.com';
    const endPointAllCities = `/v2/cities?state=${this.selectedState}&country=${this.selectedCountry}`;
    const APIKey = '&key=70cf142d-93ae-47b2-a378-9ebdb2b51916';
    const url = `${domain}${endPointAllCities}${APIKey}`;

    this.http.get(url).subscribe((data: any) => {
      this.cities = data.data.map((element: any) => element.city);
    });
  }
  showWeather() {
    if (
      this.selectedCity !== '' &&
      this.selectedState !== '' &&
      this.selectedCountry !== ''
    )
      this.showTemperature = true;
    alert('Chose a city!');
    const domain = 'http://api.airvisual.com';
    const endPointCity = '/v2/city';
    const APIKey = '70cf142d-93ae-47b2-a378-9ebdb2b51916';
    const urlCity = `${domain}${endPointCity}`;
    const APIParams = {
      city: `${this.selectedCity}`,
      state: `${this.selectedState}`,
      country: `${this.selectedCountry}`,
      key: APIKey,
    };

    this.http
      .get(urlCity, { params: APIParams })
      .pipe(map((response: any) => response.data))
      .subscribe((value: any) => {
        this.temperature = value.current.weather.tp;
        this.humidity = value.current.weather.hu;
        this.windSpeed = value.current.weather.ws;
        this.atmospherePressure = value.current.weather.pr;
        this.city = value.city;
      });
  }
}
