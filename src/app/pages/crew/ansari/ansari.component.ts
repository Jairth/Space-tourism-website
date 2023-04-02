import { Component, OnInit } from '@angular/core';
import { Crew } from 'src/app/interface/interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-ansari',
  templateUrl: './ansari.component.html',
  styleUrls: ['./ansari.component.scss']
})
export class AnsariComponent implements OnInit {

  public crew:Crew[] = []

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.crew = this.dataService.crew
  }

}
