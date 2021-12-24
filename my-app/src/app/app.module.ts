import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ShowWeatherComponent } from './show-weather/show-weather.component';
import { MainComponent } from './main/main.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { CityListComponent } from './city-list/city-list.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ShowWeatherComponent,
    MainComponent,
    NotFoundPageComponent,
    CityListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
