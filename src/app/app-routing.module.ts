import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GettingComponent} from './getting/getting.component';
import { PostingComponent} from './posting/posting.component';

const routes: Routes = [
  {path:'getting', component: GettingComponent},
  {path:'posting', component: PostingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
