import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GettingComponent } from './getting/getting.component';
import { PostingComponent } from './posting/posting.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MaterialModule} from './material-module';

@NgModule({
  declarations: [
    AppComponent,
    GettingComponent,
    PostingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatSidenavModule,
    MaterialModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
