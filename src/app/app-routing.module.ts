import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GettingComponent} from './getting/getting.component';

const routes: Routes = [
  {path:'getting', component: GettingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
