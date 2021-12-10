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
import { CarousselComponent } from './components/accueil/caroussel/caroussel.component';
import { AboutUsComponent } from './components/accueil/about-us/about-us.component';
import { CardsComponent } from './components/accueil/cards/cards.component';
import { CardComponent } from './components/accueil/cards/card/card.component';
import { FooterComponent } from './components/accueil/footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AdminnavbarComponent } from './components/admin/adminnavbar/adminnavbar.component';
import { MappComponent } from './components/admin/mapp/mapp.component';
import { GestiondestinationComponent } from './components/admin/gestiondestination/gestiondestination.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { GuardService } from './services/guard.service';
import { ListdestinationComponent } from './components/destination/listdestination/listdestination.component';
import { OnedestinationComponent } from './components/destination/onedestination/onedestination.component';
import { PrixPipe } from './pipes/prix.pipe';
import { AjoutdestinationComponent } from './components/admin/gestiondestination/ajoutdestination/ajoutdestination.component';
import { UpdatedestinationComponent } from './components/admin/gestiondestination/updatedestination/updatedestination.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { HotelComponent } from './components/hotels/hotel/hotel.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { ReservationComponent } from './components/reservation/reservation.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AjouthotelComponent } from './components/admin/gestiondestination/ajouthotel/ajouthotel.component';
import { UpdatehotelComponent } from './components/admin/gestiondestination/updatehotel/updatehotel.component';
import { DatePipe } from './pipes/date.pipe';
import { OffreCardComponent } from './components/offre/offre-card/offre-card.component';
import { OffreReservationComponent } from './components/offre/offre-reservation/offre-reservation.component';
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
    CarousselComponent,
    AboutUsComponent,
    CardsComponent,
    CardComponent,
    FooterComponent,
    AdminnavbarComponent,
    MappComponent,
    GestiondestinationComponent,
    DashboardComponent,
    ListdestinationComponent,
    OnedestinationComponent,
    PrixPipe,
    AjoutdestinationComponent,
    UpdatedestinationComponent,
    HotelsComponent,
    HotelComponent,
    ReservationComponent,
    AjouthotelComponent,
    UpdatehotelComponent,
    DatePipe,
    OffreCardComponent,
    OffreReservationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
    MDBBootstrapModule.forRoot(),
    MatFormFieldModule,
    MatIconModule,
    MatGridListModule,
    NgxStarRatingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [GuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
