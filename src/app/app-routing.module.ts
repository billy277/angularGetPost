import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Testing2Component } from './testing2/testing2.component';

const routes: Routes = [
  {path:'testing', component: Testing2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
