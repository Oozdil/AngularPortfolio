import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommerceComponent } from './ecommerce.component';
import {MatSidenavModule} from '@angular/material/sidenav';



@NgModule({
  declarations: [
    EcommerceComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule
  ]
})
export class EcommerceModule { }
