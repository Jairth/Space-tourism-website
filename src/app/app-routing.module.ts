import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrewComponent } from './pages/crew/crew.component';
import { DestinationComponent } from './pages/destination/destination.component';
import { EuropaComponent } from './pages/destination/europa/europa.component';
import { MarsComponent } from './pages/destination/mars/mars.component';
import { MoonComponent } from './pages/destination/moon/moon.component';
import { TitanComponent } from './pages/destination/titan/titan.component';
import { HomeComponent } from './pages/home/home.component';
import { TechnologyComponent } from './pages/technology/technology.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'destination',
    component: DestinationComponent,
    children: [
      { path: 'moon', component: MoonComponent },
      { path: 'mars', component: MarsComponent },
      { path: 'europa', component: EuropaComponent },
      { path: 'titan', component: TitanComponent },
      { path: '**', redirectTo: 'moon', pathMatch: 'full' },
    ]
  },
  {
    path: 'crew',
    component: CrewComponent,
  },
  {
    path: 'technology',
    component: TechnologyComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
