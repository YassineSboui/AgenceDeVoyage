import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/authentification/signin/signin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './components/authentification/signup/signup.component';
import { Error404Component } from './components/error404/error404.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AccueilComponent } from './components/accueil/accueil.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OffreComponent } from './components/offre/offre.component';
import { DestinationComponent } from './components/destination/destination.component';
import { ContactComponent } from './components/contact/contact.component';
import { MapComponent } from './components/map/map.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    Error404Component,
    AccueilComponent,
    NavbarComponent,
    OffreComponent,
    DestinationComponent,
    ContactComponent,
    MapComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
