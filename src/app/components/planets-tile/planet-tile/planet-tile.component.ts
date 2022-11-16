import { Component, Input, OnInit, SimpleChanges } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { TABLE_HORIZONTAL_SPLIT } from '@syncfusion/ej2/richtexteditor'
import { Planet } from 'src/app/helpers/Planet'
import { SharedService } from 'src/app/services/shared.service'
import { ModelComponent } from '../../model/model.component'

@Component({
    selector: 'app-planet-tile',
    templateUrl: './planet-tile.component.html',
    styleUrls: ['./planet-tile.component.css']
})
export class PlanetTileComponent implements OnInit {
    lang!: string
    constructor(public translate: TranslateService, private shared: SharedService) {}

    @Input() englishName!: string
    @Input() massValue!: string
    @Input() massExponent!: string
    @Input() meanRadius!: string
    @Input() averageTemperature!: string
    @Input() moons!: string
    @Input() sideralRotation!: string
    @Input() perihelion!: string
    @Input() aphelion!: string
    @Input() semimajorAxis!: string
    @Input() sideralOrbit!: string

    planetData!: Planet
    orbitalCharacteristic!: string
    physicalCharacteristic!: string

    ngOnInit(): void {}

    closeTile(): void {
        this.shared.setPlanetName(undefined)
    }
}
