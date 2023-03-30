import { Component, OnInit } from '@angular/core';
import { Destination } from 'src/app/interface/interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-europa',
  templateUrl: './europa.component.html',
  styleUrls: ['./europa.component.scss']
})
export class EuropaComponent implements OnInit {

  public destinations:Destination[] = []

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.destinations = this.dataService.destinations
  }

}
