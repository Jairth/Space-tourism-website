import { Component, OnInit } from '@angular/core';
import { Tech } from 'src/app/interface/interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-spaceport',
  templateUrl: './spaceport.component.html',
  styleUrls: ['./spaceport.component.scss'],
})
export class SpaceportComponent implements OnInit {

  public tech:Tech[] = []

  constructor(private dataService:DataService) {}

  ngOnInit() {
    this.tech = this.dataService.technology
  }
}
