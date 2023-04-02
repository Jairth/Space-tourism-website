import { Component, OnInit } from '@angular/core';
import { Crew } from 'src/app/interface/interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-douglas',
  templateUrl: './douglas.component.html',
  styleUrls: ['./douglas.component.scss']
})

export class DouglasComponent implements OnInit{

  public crew:Crew[] = []

  constructor(private dataService: DataService ) {}

  ngOnInit(): void {
    this.crew = this.dataService.crew
    console.log(this.crew)
  }

}
