import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import {
  MdCardModule,
  MdButtonModule,
  MdRadioModule,
  MdSnackBarModule,
  MdProgressSpinnerModule,
  MdDialogModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DialogComponent } from './home/dialog.component';

import { AIService } from './AI-service/ai.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    // AngularMaterial
    MdCardModule,
    MdButtonModule,
    MdRadioModule,
    MdSnackBarModule,
    MdProgressSpinnerModule,
    MdDialogModule,
    // Routing logic
    AppRoutingModule,
  ],
  entryComponents: [
    DialogComponent,
  ],
  providers: [
    AIService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
