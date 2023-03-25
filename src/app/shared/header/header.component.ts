import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public active:boolean = false

  constructor(private router:Router){}

  change() {
    this.active = !this.active
  }

  destination() {
    this.router.navigate(['/destination'])
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

  crew(){
    this.router.navigate(['/crew'])
  }

  technology() {
    this.router.navigate(['/technology'])
  }
}
