import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { SigninComponent } from './components/authentification/signin/signin.component';
import { SignupComponent } from './components/authentification/signup/signup.component';
import { DestinationComponent } from './components/destination/destination.component';
import { Error404Component } from './components/error404/error404.component';
import { OffreComponent } from './components/offre/offre.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'offre', component: OffreComponent },
  { path: 'destination', component: DestinationComponent },
  { path: 'admin', component: DashboardComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
