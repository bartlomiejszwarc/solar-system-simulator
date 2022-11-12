import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'solar-system-simulator';
  planet = 'earth';
  dateMode: boolean = false;
  constructor(public router: Router) {}

  setMode() {
    this.dateMode = !this.dateMode;
  }
}
