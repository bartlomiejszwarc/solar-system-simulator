import { Component, ViewChild } from '@angular/core';
import { PlanetTileComponent } from './components/planets-tile/planet-tile/planet-tile.component';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'solar-system-simulator';
  planet = 'earth';
  constructor() {}
}
