import { Component, OnInit } from '@angular/core';
import { Destination } from 'src/app/interface/interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.scss']
})
export class MarsComponent implements OnInit {

  public destinations:Destination[] = []

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.destinations = this.dataService.destinations
  }

}
