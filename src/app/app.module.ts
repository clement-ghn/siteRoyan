import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ClubsComponent } from './clubs/clubs.component';
import { NatationComponent } from './natation/natation.component';
import { FormulaireInscriptionComponent } from './formulaire-inscription/formulaire-inscription.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ConnexionComponent } from './connexion/connexion.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
];

@NgModule({
  declarations: [
    AppComponent, AccueilComponent, ClubsComponent, NatationComponent, FormulaireInscriptionComponent, ContactsComponent, ConnexionComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
