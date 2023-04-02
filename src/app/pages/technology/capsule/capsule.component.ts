import { Component, OnInit } from '@angular/core';
import { Tech } from 'src/app/interface/interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-capsule',
  templateUrl: './capsule.component.html',
  styleUrls: ['./capsule.component.scss']
})
export class CapsuleComponent implements OnInit {

  public tech:Tech[] = []

  constructor(private dataService:DataService) {}

  ngOnInit() {
    this.tech = this.dataService.technology
  }
}
