import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontendComponent } from './frontend/frontend.component';
import { BackendComponent } from './backend/backend.component';

const routes: Routes = [
  {path:"",component:FrontendComponent},
  {path:"admin",component:BackendComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
