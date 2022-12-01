import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { MaterialModule } from './material/material.module';
import { SharedModule } from "./shared/shared.module";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    PagesModule
  ]
})
export class AppModule { }
