import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs';
import { ImageService } from '../image.service';
import { fromFetch } from 'rxjs/fetch';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  domain = 'http://api.airvisual.com';
  APIKey = '&key=70cf142d-93ae-47b2-a378-9ebdb2b51916';
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
  nameIcon = '';
  showTemperature = false;
  imageToShow: any;
  firstCity = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    public imageService: ImageService
  ) {}
  ngOnInit() {
    const endPointAllCountries = '/v2/countries?';
    const url = `${this.domain}${endPointAllCountries}${this.APIKey}`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
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
    const endPointState = `/v2/states?country=${this.selectedCountry}`;
    const url = `${this.domain}${endPointState}${this.APIKey}`;

    this.http.get(url).subscribe((data: any) => {
      this.state = data.data.map((element: any) => element.state);
    });
  }
  changeCity() {
    const endPointAllCities = `/v2/cities?state=${this.selectedState}&country=${this.selectedCountry}`;
    const url = `${this.domain}${endPointAllCities}${this.APIKey}`;

    this.http
      .get(url)
      .pipe(
        map((res: any) => (this.firstCity = res.data.shift().city)),
        switchMap(() =>
          this.http.get(
            `http://api.airvisual.com/v2/city?city=${this.firstCity}&state=${this.selectedState}&country=${this.selectedCountry}&${this.APIKey}`
          )
        )
      )
      .subscribe((value: any) => {
        this.temperature = value.data.current.weather.tp;
        this.humidity = value.data.current.weather.hu;
        this.windSpeed = value.data.current.weather.ws;
        this.atmospherePressure = value.data.current.weather.pr;
        this.city = value.data.city;
        this.nameIcon = value.data.current.weather.ic;
        console.log(this.nameIcon);
      });
  }

  showWeather() {
    this.selectedState !== '' && this.selectedCountry !== ''
      ? (this.showTemperature = true)
      : alert('Chose a city!');
    const urlIcon = `http://openweathermap.org/img/wn/${this.nameIcon}@2x.png`;
    this.imageService.getImage(urlIcon).subscribe((data) => {
      this.createImageFromBlob(data);
    });
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();

    reader.addEventListener('load', () => {
      this.imageToShow = reader.result;
      console.log(this.imageToShow);
    });
    if (image) {
      reader.readAsDataURL(image);
    }
  }
}
