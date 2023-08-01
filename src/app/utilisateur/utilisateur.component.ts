import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  username: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Récupérer le paramètre 'username' de l'URL
    this.route.paramMap.subscribe(params => {
      this.username = params.get('username') || 'Utilisateur inconnu';
    });
  }
}
