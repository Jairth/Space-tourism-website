import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

type Fondos = {
  [key: string]: string;
}

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit{

  seccionActual = 'Technology';

  constructor(private dataService:DataService){}

  ngOnInit(): void {
    this.dataService.actualizarFondo(this.seccionActual)
  }

}
