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
import { DouglasComponent } from './crew/douglas/douglas.component';
import { MarkComponent } from './crew/mark/mark.component';
import { VictorComponent } from './crew/victor/victor.component';
import { AnsariComponent } from './crew/ansari/ansari.component';
import { VehicleComponent } from './technology/vehicle/vehicle.component';
import { SpaceportComponent } from './technology/spaceport/spaceport.component';
import { CapsuleComponent } from './technology/capsule/capsule.component';

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
        children: [
          { path: 'douglas', component: DouglasComponent },
          { path: 'mark', component: MarkComponent },
          { path: 'victor', component: VictorComponent },
          { path: 'ansari', component: AnsariComponent },
          { path: '**', redirectTo: 'douglas', pathMatch: 'full' },
        ],
      },
      {
        path: 'technology',
        component: TechnologyComponent,
        children: [
          { path: 'vehicle', component: VehicleComponent },
          { path: 'spaceport', component: SpaceportComponent },
          { path: 'capsule', component: CapsuleComponent },
          { path: '**', redirectTo: 'vehicle', pathMatch: 'full' },
        ],
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
  exports: [RouterModule],
})
export class PageRoutingModule {}
