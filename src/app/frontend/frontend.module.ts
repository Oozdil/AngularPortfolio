import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendComponent } from './frontend.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContentComponent } from './layout/content/content.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeModule } from './components/home/home.module';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { CrudModule } from './components/crud/crud.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FrontendComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    CalculatorComponent,

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HomeModule,
    CrudModule,   
    FormsModule 
  ]
})
export class FrontendModule { }
