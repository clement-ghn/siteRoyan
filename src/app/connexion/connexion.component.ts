import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-connexion',
  templateUrl: 'connexion.component.html',
  styleUrls: ['connexion.component.css']
})
export class ConnexionComponent {
  username: string;
  password: string;
  showErrorMessage = false;

  constructor(private personService: PersonService, private router: Router) {}

  onSubmit() {
    // Vérifier si la personne est connue et si le mot de passe associé est correct et non vide
    if (this.personService.isPersonKnown(this.username, this.password) && this.password.trim() !== '') {
      this.router.navigateByUrl('/utilisateur/' + this.username);
      this.showErrorMessage = false;
    } else {
      this.showErrorMessage = true;
    }
  }
}
