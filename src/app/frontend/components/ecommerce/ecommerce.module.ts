import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommerceComponent } from './ecommerce.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { RouterModule } from '@angular/router';
import { ShophomeComponent } from './components/shophome/shophome.component';



@NgModule({
  declarations: [
    EcommerceComponent,
    ShophomeComponent,
    ProductsComponent,
    CartComponent,
    ShophomeComponent,
    
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterModule
  ]
})
export class EcommerceModule { }
