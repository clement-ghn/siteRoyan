import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';



@Component({
  selector: 'app-formulaire',
  templateUrl: 'formulaire-inscription.component.html',
  styleUrls: ['formulaire-inscription.component.css']
})
export class FormulaireInscriptionComponent {
  showThankYouMessage: boolean = false;
  formData: any = {};

  submitForm() {
    this.showThankYouMessage = true;
    const pdf = new jsPDF();
    const nom = this.formData.nom;
    const prenom = this.formData.prenom;
    const adresse = this.formData.adresse;
    const adresseRoyan = this.formData.adresseRoyan;
    const telephone = this.formData.telephone;
    const email = this.formData.email;
    const hopital = this.formData.hopital === 'yes' ? 'Oui' : 'Non';
    const photos = this.formData.photos === 'yes' ? 'Oui' : 'Non';
    const sortir = this.formData.sortir === 'yes' ? 'Oui' : 'Non';

    const content = `Nom: ${nom}\nPrénom: ${prenom}\nEmail: ${email}\nAdresse Permanente: ${adresse}\nAdresse sur place: ${adresseRoyan}\nTéléphone: ${telephone} \nSortir seul: ${sortir}\nPrendre les mesures nécessaires d'hospitalisation: ${hopital}\nDroit à l'image: ${photos} `;
    pdf.text(content, 10, 10);
    pdf.save('form_data.pdf');
    }
}
