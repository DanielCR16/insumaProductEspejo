import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyRoutingModule } from './body.routing';
import { ProductViewComponent } from './product-view/product-view.component';



@NgModule({
  declarations: [ProductViewComponent],
  imports: [
    CommonModule,
    BodyRoutingModule
  ]
})
export class BodyModule { }
