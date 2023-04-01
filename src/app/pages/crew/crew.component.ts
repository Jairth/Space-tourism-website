import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss'],
})
export class CrewComponent implements OnInit {
  seccionActual: string = 'Crew';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.actualizarFondo(this.seccionActual);
  }
}
