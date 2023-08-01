import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private knownPeople: { [username: string]: string } = {
    'Paul': 'ClownMickey',
    'Laurianne': 'Mickette',
    'Clement': 'Terriere'
  };

  isPersonKnown(username: string, password: string): boolean {
    return this.knownPeople[username] === password;
  }
}
