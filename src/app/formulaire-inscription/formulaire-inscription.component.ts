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
    const name = this.formData.name;
    const email = this.formData.email;
    const hopital = this.formData.hopital;

    const content = `Nom: ${name}\nEmail: ${email}\n hopital: ${hopital}`;
    pdf.text(content, 10, 10);
    pdf.save('form_data.pdf');
    }
}
