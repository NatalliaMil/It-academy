import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ShowWeatherComponent } from './show-weather/show-weather.component';

const routes: Routes = [
  { path: 'showweather', component: ShowWeatherComponent },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
