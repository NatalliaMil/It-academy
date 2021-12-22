import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ShowWeatherComponent } from './show-weather/show-weather.component';
import { MainComponent } from './main/main.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

@NgModule({
  declarations: [AppComponent, ShowWeatherComponent, MainComponent, NotFoundPageComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
