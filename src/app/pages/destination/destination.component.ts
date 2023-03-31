import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Destination } from 'src/app/interface/interface';
import { DataService } from 'src/app/services/data.service';

type Fondos = {
  [key: string]: string;
}

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss'],
})

export class DestinationComponent implements OnInit{


  public destinations:Destination[] = []
  seccionActual: string = 'Destination';

  constructor(private dataService: DataService,private router:Router) {}

  ngOnInit(): void {
    this.destinations = this.dataService.destinations
    this.dataService.actualizarFondo(this.seccionActual)
  }

}
