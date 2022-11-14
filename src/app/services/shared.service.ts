import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private languageBefore = new BehaviorSubject('pl');
  currentLanguage = this.languageBefore.asObservable();

  constructor() {}

  currentLang!: string;
  changeLanguage(language: string) {
    this.languageBefore.next(language);
  }

  getLanguage() {
    return this.currentLang;
  }

  setLanguage(language: string) {
    this.currentLang = language;
  }
}
