import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { Testing2Component } from './testing2/testing2.component';
import { UpdateFormComponent } from './update-form/update-form.component';
// import { rdsDataModule } from './rdsData.module';

@NgModule({
  declarations: [
    AppComponent,
    Testing2Component,
    UpdateFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // rdsDataModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
