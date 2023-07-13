import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ɵNgNoValidate } from '@angular/forms';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
];

@Component({
  selector: 'app-root',
  template: ` <router-outlet></router-outlet>`
})

export class AppComponent implements OnInit{
  page =  ['Accueil','du club des Albatros', 'du club des Pingouins', 'du club des Tritons', 'Natation', 'Formulaire inscription', 'Contacts et plan'] ;


  ngOnInit() {
    console.table(this.page);
    this.selectPage('Accueil');
  }

  selectPage(page: string){
    console.log(`Vous avez choisi la page ${page}`);
  }
}
