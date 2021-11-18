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
import { ContactComponent } from './components/accueil/contact/contact.component';
import { MapComponent } from './components/map/map.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { CarousselComponent } from './components/accueil/caroussel/caroussel.component';
import { AboutUsComponent } from './components/accueil/about-us/about-us.component';
import { CardsComponent } from './components/accueil/cards/cards.component';
import { CardComponent } from './components/accueil/cards/card/card.component';
import { FooterComponent } from './components/accueil/footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

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
    DashboardComponent,
    CarousselComponent,
    AboutUsComponent,
    CardsComponent,
    CardComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
