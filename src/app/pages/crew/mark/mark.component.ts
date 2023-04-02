import { Component, OnInit } from '@angular/core';
import { Crew } from 'src/app/interface/interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.scss']
})
export class MarkComponent implements OnInit {

  public crew:Crew[] = []

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.crew = this.dataService.crew
  }

}
