import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { ClubsComponent } from './clubs/clubs.component';
import { NatationComponent } from './natation/natation.component';
import { FormulaireInscriptionComponent } from './formulaire-inscription/formulaire-inscription.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';

export const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'clubs', component: ClubsComponent },
  { path: 'natation', component: NatationComponent },
  { path: 'formulaire-inscription', component: FormulaireInscriptionComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'utilisateur/:username', component: UtilisateurComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
