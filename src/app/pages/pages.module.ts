import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DestinationComponent } from './destination/destination.component';
import { CrewComponent } from './crew/crew.component';
import { TechnologyComponent } from './technology/technology.component';
import { DataService } from '../services/data.service';
import { PageRoutingModule } from './pageRouting.module';

@NgModule({
  declarations: [
    HomeComponent,
    DestinationComponent,
    CrewComponent,
    TechnologyComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule
  ],
  providers: [
    DataService
  ],
  exports: [
    HomeComponent,
    DestinationComponent,
    CrewComponent,
    TechnologyComponent
  ]
})
export class PagesModule { }
