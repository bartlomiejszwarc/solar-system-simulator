import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private languageBefore = new BehaviorSubject('pl');
  currentLanguage = this.languageBefore.asObservable();

  constructor() {}

  changeLanguage(language: string) {
    this.languageBefore.next(language);
  }
}
