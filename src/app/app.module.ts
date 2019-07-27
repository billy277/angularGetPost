import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GettingComponent } from './getting/getting.component';
import { PostingComponent } from './posting/posting.component';

@NgModule({
  declarations: [
    AppComponent,
    GettingComponent,
    PostingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
