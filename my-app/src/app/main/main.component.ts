import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { ImageService } from '../image.service';

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

  constructor(
    private http: HttpClient,
    private router: Router,
    public imageService: ImageService
  ) {}
  ngOnInit() {
    const endPointAllCountries = '/v2/countries?';
    const url = `${this.domain}${endPointAllCountries}${this.APIKey}`;

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
    const endPointState = `/v2/states?country=${this.selectedCountry}`;
    const url = `${this.domain}${endPointState}${this.APIKey}`;

    this.http.get(url).subscribe((data: any) => {
      this.state = data.data.map((element: any) => element.state);
    });
  }
  changeCity() {
    const endPointAllCities = `/v2/cities?state=${this.selectedState}&country=${this.selectedCountry}`;
    const url = `${this.domain}${endPointAllCities}${this.APIKey}`;

    this.http.get(url).subscribe((data: any) => {
      this.cities = data.data.map((element: any) => element.city);
    });
  }
  submit(): any {
    const endPointCity = '/v2/city';
    const APIKey = '70cf142d-93ae-47b2-a378-9ebdb2b51916';
    const urlCity = `${this.domain}${endPointCity}`;
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
        this.nameIcon = value.current.weather.ic;
        console.log(this.nameIcon);
      });
  }
  showWeather() {
    this.selectedCity !== '' &&
    this.selectedState !== '' &&
    this.selectedCountry !== ''
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
