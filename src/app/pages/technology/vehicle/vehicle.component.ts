import { Component, OnInit } from '@angular/core';
import { Tech } from 'src/app/interface/interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
})
export class VehicleComponent implements OnInit {

  public tech:Tech[] = []

  constructor(private dataService:DataService) {}

  ngOnInit() {
    this.tech = this.dataService.technology
  }
}
