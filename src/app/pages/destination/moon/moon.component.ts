import { Component, OnInit } from '@angular/core';
import { Destination } from 'src/app/interface/interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-moon',
  templateUrl: './moon.component.html',
  styleUrls: ['./moon.component.scss']
})
export class MoonComponent implements OnInit {

  public destinations:Destination[] = []

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.destinations = this.dataService.destinations
  }

}
