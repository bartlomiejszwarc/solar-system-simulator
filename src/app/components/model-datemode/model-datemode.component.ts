import { Component, OnInit } from '@angular/core'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Options } from '@angular-slider/ngx-slider'
import { DataService } from 'src/app/services/data.service'
import * as PlanetData from 'src/app/helpers/PlanetData'
import * as PlanetTexture from 'src/app/helpers/PlanetTexture'
import * as PlanetObjectData from 'src/app/helpers/PlanetObjectData'
import * as PivotPointDate from 'src/app/helpers/PivotPointDate'
import * as PlanetOrbit from 'src/app/helpers/PlanetOrbit'
import { InteractionManager } from 'three.interactive'
import { Planet } from 'src/app/helpers/Planet'
import { Clock } from 'three'
import { degToRad, radToDeg } from 'three/src/math/MathUtils'
import { TranslateService } from '@ngx-translate/core'
import { AppComponent } from 'src/app/app.component'
import { DatePipe } from '@angular/common'
import * as AE from 'astronomy-engine'
import * as DateHelper from 'src/app/helpers/Date'

@Component({
    selector: 'app-model-datemode',
    templateUrl: './model-datemode.component.html',
    styleUrls: ['./model-datemode.component.css']
})
export class ModelDatemodeComponent implements OnInit {
    //Orbit trace flag
    showOrbit = false
    selected!: Date | null
    planetNameData!: Planet
    rendererDate = new THREE.WebGLRenderer({
        antialias: true,
        precision: 'highp',
        powerPreference: 'high-performance',
        logarithmicDepthBuffer: true
    })

    camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        10,
        30000
    )
    sceneDate = new THREE.Scene()

    form: any = {
        startDate: '',
        endDate: '',
        singleDate: ''
    }
    pipe = new DatePipe('en-US')
    singleDateFormatted = ''

    today: any = JSON.parse(JSON.stringify(this.pipe.transform(new Date(), 'YYYY-MM-dd')))

    millenium: Date = new Date('2000/01/02')

    constructor(
        private dataService: DataService,
        public translate: TranslateService,
        public app: AppComponent
    ) {
        translate.addLangs(['en', 'pl'])
        const interactionManager = new InteractionManager(
            this.rendererDate,
            this.camera,
            this.rendererDate.domElement,
            false
        )

        //Creating rendererDate
        this.rendererDate.setPixelRatio(2)
        this.rendererDate.setSize(window.innerWidth, window.innerHeight)
        document.body.appendChild(this.rendererDate.domElement)

        //Creating camera
        this.camera.position.set(250, 250, 250)
        const orbit = new OrbitControls(this.camera, this.rendererDate.domElement)

        this.sceneDate.background = PlanetTexture.backgroundTextureMap
        //Adding sun to sceneDate
        this.sceneDate.add(PlanetObjectData.sun)

        //Adding light from The Sun
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.015)
        //
        const pointLight = new THREE.PointLight(0xffffff, 1.2137, 3500000)
        this.sceneDate.add(ambientLight)
        this.sceneDate.add(pointLight)

        PivotPointDate.pivotPointArray.forEach((pivotPoint) => {
            this.sceneDate.add(pivotPoint)
        })
        for (var i = 0; i < PlanetObjectData.planets.length; i++) {
            PlanetObjectData.planets[i].position.set(PlanetData.distancesArray[i], 0, 0)
        }
        PlanetObjectData.saturnRings.position.set(PlanetData.saturnDistance, 0, 0)
        this.rendererDate.setAnimationLoop(() => {
            interactionManager.update()
            if (this.showOrbit) {
                PlanetOrbit.orbits.forEach((orbit) => {
                    PlanetObjectData.sun.add(orbit)
                })
            } else {
                PlanetOrbit.orbits.forEach((orbit) => {
                    PlanetObjectData.sun.remove(orbit)
                })
            }
            this.rendererDate.render(this.sceneDate, this.camera)
        })
    }

    ngOnInit(): void {}

    dateMode() {
        this.app.setMode()
        document.body.removeChild(this.rendererDate.domElement)
        this.rendererDate.setAnimationLoop(null)
    }
    orbits() {
        this.showOrbit = !this.showOrbit
    }
    catchDate() {
        this.singleDateFormatted = JSON.parse(
            JSON.stringify(this.pipe.transform(this.form.singleDate, 'YYYY-MM-dd'))
        )
        let singleDate = DateHelper.daysSinceMilleniumFromDate(
            new Date(this.singleDateFormatted)
        )
        if (this.form.singleDate !== null) this.setPlanetPosition(singleDate)
    }
    setPlanetPosition(date: AE.FlexibleDateTime) {
        for (let i = 0; i < PivotPointDate.pivotPointArray.length; i++) {
            PivotPointDate.pivotPointArray[i].rotation.y = 0
            PivotPointDate.pivotPointArray[i].rotation.z = 0
            PivotPointDate.pivotPointArray[i].rotation.x = 0
            PivotPointDate.pivotPointArray[i].rotation.y = degToRad(
                AE.EclipticLongitude(PivotPointDate.planetBody[i], date)
            )
        }

        this.rendererDate.render(this.sceneDate, this.camera)
    }
}
