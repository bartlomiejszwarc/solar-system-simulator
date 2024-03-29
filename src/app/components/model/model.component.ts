import { Component, OnInit } from '@angular/core'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Options } from '@angular-slider/ngx-slider'
import { DataService } from 'src/app/services/data.service'
import * as PlanetData from 'src/app/helpers/PlanetData'
import * as PlanetTexture from 'src/app/helpers/PlanetTexture'
import * as PlanetObject from 'src/app/helpers/PlanetObject'
import * as PivotPoint from 'src/app/helpers/PivotPoint'
import * as PlanetOrbit from 'src/app/helpers/PlanetOrbit'
import { InteractionManager } from 'three.interactive'
import { Planet } from 'src/app/helpers/Planet'
import { Clock } from 'three'
import { degToRad } from 'three/src/math/MathUtils'
import { TranslateService } from '@ngx-translate/core'
import { AppComponent } from 'src/app/app.component'
import { SharedService } from 'src/app/services/shared.service'

@Component({
    selector: 'app-model',
    templateUrl: './model.component.html',
    styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
    value: number = 1
    options: Options = {
        showTicksValues: true,
        stepsArray: [
            { value: 0.25 },
            { value: 0.5 },
            { value: 1 },
            { value: 7 },
            { value: 28 },
            { value: 365 }
        ]
    }

    //Global speed multiplier
    globalRotationSpeed = 0.1
    globalSpinSpeed = 1

    //Flags
    showOrbit = false
    dateModeFlag: boolean = false
    planetName!: Planet

    renderer = new THREE.WebGLRenderer({
        antialias: true,
        precision: 'highp',
        powerPreference: 'high-performance',
        logarithmicDepthBuffer: true
    })

    camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        10,
        30000
    )
    scene = new THREE.Scene()
    constructor(
        private dataService: DataService,
        public translate: TranslateService,
        public app: AppComponent,
        public shared: SharedService
    ) {
        const interactionManager = new InteractionManager(
            this.renderer,
            this.camera,
            this.renderer.domElement,
            false
        )

        //Setting renderer
        this.renderer.setPixelRatio(2)
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        document.body.appendChild(this.renderer.domElement)

        //Setting camera
        this.camera.position.set(0, 300, 250)
        new OrbitControls(this.camera, this.renderer.domElement)

        this.scene.background = PlanetTexture.backgroundTextureMap

        //Adding sun to scene
        this.scene.add(PlanetObject.sun)

        //Adding pivot points to scene
        PivotPoint.pivotPointArray.forEach((pivotPoint) => {
            this.scene.add(pivotPoint)
        })

        //Adding light from The Sun
        const ambientLight = new THREE.AmbientLight('white', 0.015)
        //
        const pointLight = new THREE.PointLight('white', 1.1, 4000)
        this.scene.add(ambientLight)
        this.scene.add(pointLight)

        //Adding click events to objects and fetching data
        PlanetObject.planets.forEach((planet) => {
            interactionManager.add(planet)
            planet.addEventListener('click', () => {
                this.dataService.getPlanetData(planet.name).subscribe((res) => {
                    this.planetName = res
                    this.shared.setPlanetName(this.planetName)
                    if (res.moons !== null) this.planetName.moons = res.moons.length
                    else {
                        this.planetName.moons = '0'
                    }
                    this.planetName.massValue = res.mass.massValue
                    this.planetName.massExponent = res.mass.massExponent
                    this.planetName.avgTemp = (res.avgTemp - 272.15).toFixed(1)

                    this.planetName.sideralOrbit = res.sideralOrbit.toFixed(1) + ' d'

                    //TODO: days/years
                    if (Math.abs(res.sideralRotation) > 24) {
                        this.planetName.sideralRotation =
                            (Math.abs(res.sideralRotation) / 24).toFixed(2) + ' d'
                    } else {
                        this.planetName.sideralRotation =
                            Math.abs(res.sideralRotation).toFixed(2) + ' h'
                    }
                })
            })
        })

        const clock = new Clock()
        let delta = 0
        const fps = 60 // 60 fps required
        let interval = 1 / fps

        //Animation loop
        this.renderer.setAnimationLoop(() => {
            delta += clock.getDelta()
            if (delta > interval) {
                for (var i = 0; i < PlanetObject.planets.length; i++) {
                    PlanetObject.planets[i].position.set(
                        PlanetData.distancesArray[i],
                        0,
                        0
                    )
                    //own
                    PlanetObject.planets[i].rotateY(
                        degToRad(
                            (PlanetData.rotationSpeedArray[i] / fps) *
                                this.globalSpinSpeed
                        )
                    )

                    //orbital
                    PivotPoint.pivotPointArray[i].rotateY(
                        degToRad(
                            (PlanetData.orbitalSpeedArray[i] / interval) *
                                this.globalRotationSpeed
                        )
                    )
                }

                PlanetObject.saturnRings.position.set(PlanetData.saturnDistance, 0, 0)

                if (this.showOrbit) {
                    PlanetOrbit.orbits.forEach((orbit) => {
                        PlanetObject.sun.add(orbit)
                    })
                } else {
                    PlanetOrbit.orbits.forEach((orbit) => {
                        PlanetObject.sun.remove(orbit)
                    })
                }

                interactionManager.update()
                this.renderer.render(this.scene, this.camera)
                delta = delta % interval
            }
        })
    }

    ngOnInit(): void {
        this.shared.getPlanetName().subscribe((planetName) => {
            this.planetName = planetName
        })
    }

    changeSpeed(value: number) {
        this.globalRotationSpeed = 0.1
        this.globalSpinSpeed = 1
        this.globalRotationSpeed *= value
        this.globalSpinSpeed *= value
    }
    orbits() {
        this.showOrbit = !this.showOrbit
    }

    dateMode() {
        this.app.setMode()
        document.body.removeChild(this.renderer.domElement)
        this.renderer.setAnimationLoop(null)
        this.globalRotationSpeed = 0.1
        this.globalSpinSpeed = 1
    }
}
