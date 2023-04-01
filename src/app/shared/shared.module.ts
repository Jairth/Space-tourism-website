import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ErrorPageComponent } from './error-page/error-page.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    ErrorPageComponent
  ]
})
export class SharedModule { }
