import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrewComponent } from './crew/crew.component';
import { DestinationComponent } from './destination/destination.component';
import { EuropaComponent } from './destination/europa/europa.component';
import { MarsComponent } from './destination/mars/mars.component';
import { MoonComponent } from './destination/moon/moon.component';
import { TitanComponent } from './destination/titan/titan.component';
import { HomeComponent } from './home/home.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
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
        ],
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
        redirectTo: 'home',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule {}
