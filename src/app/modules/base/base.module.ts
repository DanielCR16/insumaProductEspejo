import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base.component';
import { FooterComponent } from '../partials/footer/footer.component';
import { TopbarComponent } from '../partials/topbar/topbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [BaseComponent,    FooterComponent,
    TopbarComponent,],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class BaseModule { }
