import { Component, Input, OnInit } from '@angular/core';
import { Planet } from 'src/app/helpers/Planet';
import { ModelComponent } from '../../model/model.component';

@Component({
  selector: 'app-planet-tile',
  templateUrl: './planet-tile.component.html',
  styleUrls: ['./planet-tile.component.css'],
})
export class PlanetTileComponent implements OnInit {
  constructor(private modelComponent: ModelComponent) {}

  planet = 'Earth';
  @Input() englishName!: string;
  @Input() massValue!: string;
  @Input() massExponent!: string;
  @Input() meanRadius!: string;
  @Input() averageTemperature!: string;
  @Input() moons!: string;
  @Input() sideralRotation!: string;
  @Input() perihelion!: string;
  @Input() aphelion!: string;
  @Input() semimajorAxis!: string;
  @Input() sideralOrbit!: string;

  planetData!: Planet;
  planetName = this.modelComponent.planetName;

  ngOnInit(): void {}

  closeTile() {
    this.modelComponent.planetName = undefined!;
  }
}
