import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontendComponent } from './frontend/frontend.component';
import { BackendComponent } from './backend/backend.component';
import { TodolistComponent } from './frontend/components/todolist/todolist.component';
import { HomeComponent } from './frontend/components/home/home.component';
import { CalculatorComponent } from './frontend/components/calculator/calculator.component';
import { TictactoeComponent } from './frontend/components/tictactoe/tictactoe.component';
import { ChatComponent } from './frontend/components/chat/chat.component';
import { SnakeComponent } from './frontend/components/snake/snake.component';
import { EcommerceComponent } from './frontend/components/ecommerce/ecommerce.component';
import { CrudComponent } from './frontend/components/crud/crud.component';

const routes: Routes = [
  {
    path: "", component: FrontendComponent,
    children: [
      {path:"",component:HomeComponent},
      {path:"todolist",component:TodolistComponent},
      {path:"crud",component:CrudComponent},
      {path:"calculator",component:CalculatorComponent},
      {path:"tictactoe",component:TictactoeComponent},
      {path:"chat",component:ChatComponent},
      {path:"snake",component:SnakeComponent},
      {path:"ecommerce",component:EcommerceComponent},
    ],
  },
  { path: "admin", component: BackendComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
