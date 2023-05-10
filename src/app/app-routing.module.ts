import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontendComponent } from './frontend/frontend.component';
import { BackendComponent } from './backend/backend.component';
import { TodolistComponent } from './frontend/components/todolist/todolist.component';
import { HomeComponent } from './frontend/components/home/home.component';
import { CalculatorComponent } from './frontend/components/calculator/calculator.component';
import { TictactoeComponent } from './frontend/components/tictactoe/tictactoe.component';
import { ChatComponent } from './frontend/components/chat/chat.component';
import { EcommerceComponent } from './frontend/components/ecommerce/ecommerce.component';
import { CrudComponent } from './frontend/components/crud/crud.component';
import { SnakeComponent } from './frontend/components/snake/snake.component';
import { ShophomeComponent } from './frontend/components/ecommerce/components/shophome/shophome.component';
import { ProductsComponent } from './frontend/components/ecommerce/components/products/products.component';
import { CartComponent } from './frontend/components/ecommerce/components/cart/cart.component';
import { TestComponent } from './frontend/components/test/test.component';
import { TestSignalrComponent } from './frontend/components/test-signalr/test-signalr.component';

const routes: Routes = [
  {
    path: "", component: FrontendComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "todolist", component: TodolistComponent },
      { path: "crud", component: CrudComponent },
      { path: "calculator", component: CalculatorComponent },
      { path: "tictactoe", component: TictactoeComponent },
      { path: "chat", component: ChatComponent },
      { path: "snake", component: SnakeComponent },
      { path: "test", component: TestComponent },
      { path: "testsignalr", component: TestSignalrComponent },
      {
        path: "ecommerce", component: EcommerceComponent,
        children: [
        {  path:"home",component:ShophomeComponent},
        {  path:"",component:ShophomeComponent},
        {  path:"products",component:ProductsComponent},
        {  path:"cart",component:CartComponent},
        ]
      },
    ],
  },
  { path: "admin", component: BackendComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
