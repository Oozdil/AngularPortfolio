import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendComponent } from './frontend.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContentComponent } from './layout/content/content.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeModule } from './components/home/home.module';
import { CrudModule } from './components/crud/crud.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodolistModule } from './components/todolist/todolist.module';
import { TictactoeModule } from './components/tictactoe/tictactoe.module';
import { SnakeModule } from './components/snake/snake.module';
import { ChatModule } from './components/chat/chat.module';




@NgModule({
  declarations: [
    FrontendComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,    
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HomeModule,
    CrudModule,
    FormsModule,
    TodolistModule,
    TictactoeModule,
    SnakeModule,
    ChatModule,
    ReactiveFormsModule

  ]
})
export class FrontendModule { }
