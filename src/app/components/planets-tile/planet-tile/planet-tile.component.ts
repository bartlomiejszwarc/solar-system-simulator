import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import * as AE from 'astronomy-engine';
import * as Date from 'src/app/helpers/Date';
import { Observable } from 'rxjs';
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

  planetData!: Planet;
  planetName = this.modelComponent.examplePlanetName;

  ngOnInit(): void {}

  closeTile() {}
}
