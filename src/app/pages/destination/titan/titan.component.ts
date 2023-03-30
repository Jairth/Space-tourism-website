import { Component, OnInit } from '@angular/core';
import { Destination } from 'src/app/interface/interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-titan',
  templateUrl: './titan.component.html',
  styleUrls: ['./titan.component.scss']
})
export class TitanComponent implements OnInit {

  public destinations:Destination[] = []

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.destinations = this.dataService.destinations
  }

}
