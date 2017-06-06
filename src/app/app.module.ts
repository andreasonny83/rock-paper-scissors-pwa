import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import {
  MdButtonModule,
  MdRadioModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AIService } from './AI-service/ai.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    // AngularMaterial
    MdButtonModule,
    MdRadioModule,
    // Routing logic
    AppRoutingModule,
  ],
  providers: [
    AIService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
