import { Component, OnInit } from '@angular/core';
import { Crew } from 'src/app/interface/interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-victor',
  templateUrl: './victor.component.html',
  styleUrls: ['./victor.component.css']
})
export class VictorComponent implements OnInit {

  public crew:Crew[] = []

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.crew = this.dataService.crew
  }

}
