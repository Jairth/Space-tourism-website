import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'spaceApp';

  constructor(private spinner: NgxSpinnerService){}

  ngOnInit() {
    this.spinner.show(undefined, {
      type: 'ball-spin',
      size: 'medium',
      bdColor: ' #0c0f21',
      color: '#fff',
      fullScreen: true,
    });

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }
}
