import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  seccionActual: string = 'Home';

  constructor(private router:Router, private dataService:DataService){}

  ngOnInit(): void {
    this.dataService.actualizarFondo(this.seccionActual)
  }

  explorer(){
    this.router.navigate(['/destination'])
  }

}
