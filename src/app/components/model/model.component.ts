import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { degToRad, radToDeg } from 'three/src/math/MathUtils';
import * as AE from 'astronomy-engine';
import { Object3D } from 'three';
import { Options } from '@angular-slider/ngx-slider';
import { DataService } from 'src/app/services/data.service';
import * as PlanetData from 'src/app/helpers/PlanetData';
import * as PlanetTexture from 'src/app/helpers/PlanetTexture';
import * as Date from 'src/app/helpers/Date';
import { InteractionManager } from 'three.interactive';
import { PlanetTileComponent } from '../planets-tile/planet-tile/planet-tile.component';
import { Planet } from 'src/app/helpers/Planet';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
})
export class ModelComponent implements OnInit {
  value: number = 1;
  options: Options = {
    showTicksValues: true,
    stepsArray: [
      { value: 1 },
      { value: 10 },
      { value: 100 }, //1 orbit = 3.65 sec
      { value: 200 },
      { value: 500 },
      { value: 1000 },
    ],
  };
  speedSliderValue = 0;

  //Global speed multiplier
  globalRotationSpeed = 0.044;

  //Orbit trace flag
  orbitTraceFlag = false;

  //Calculating today's date for planets eclipse longitude
  examplePlanetName!: Planet;
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    precision: 'highp',
    powerPreference: 'high-performance',
    logarithmicDepthBuffer: true,
  });

  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    10,
    30000
  );

  constructor(private dataService: DataService, ref: ChangeDetectorRef) {
    const interactionManager = new InteractionManager(
      this.renderer,
      this.camera,
      this.renderer.domElement,
      false
    );
    const scene = new THREE.Scene();
    const position = new AE.Observer(53, 14, 0);

    //Creating a renderer
    this.renderer.setPixelRatio(2);
    this.renderer.setSize(window.innerWidth, window.innerHeight); // setting its size to match window inner width and height
    document.body.appendChild(this.renderer.domElement);

    //Creating a camera to look around the scene and set inital view
    this.camera.position.set(0, 360, 180);
    const orbit = new OrbitControls(this.camera, this.renderer.domElement);

    const loader = new THREE.CubeTextureLoader();
    const backgroundTexture = loader.load([
      PlanetTexture.backgroundTexture,
      PlanetTexture.backgroundTexture,
      PlanetTexture.backgroundTexture,
      PlanetTexture.backgroundTexture,
      PlanetTexture.backgroundTexture,
      PlanetTexture.backgroundTexture,
    ]);
    scene.background = backgroundTexture;

    this.renderer.setAnimationLoop(() => {
      //Mercury animation
      mercury.position.set(PlanetData.mercuryDistance, 0, 0);
      mercury.rotateY(
        PlanetData.mercuryRotationSpeed * this.globalRotationSpeed
      );
      mercuryPivotPoint.rotateY(
        PlanetData.mercuryOrbitalSpeed * this.globalRotationSpeed
      );

      //Venus animation
      venus.position.set(PlanetData.venusDistance, 0, 0);
      venus.rotateY(PlanetData.venusRotationSpeed * this.globalRotationSpeed);
      venusPivotPoint.rotateY(
        PlanetData.venusOrbitalSpeed * this.globalRotationSpeed
      );

      //Earth animation
      earth.position.set(PlanetData.earthDistance, 0, 0);
      earth.rotateY(PlanetData.earthRotationSpeed * this.globalRotationSpeed);

      earthPivotPoint.rotateY(
        PlanetData.earthOrbitalSpeed * this.globalRotationSpeed
      );

      //Moon animation
      moon.position.set(PlanetData.moonDistanceFromEarth, 0, 0);
      moon.rotateY(PlanetData.moonRotationSpeed * this.globalRotationSpeed);

      //Mars animation
      mars.position.set(PlanetData.marsDistance, 0, 0);
      mars.rotateY(PlanetData.marsRotationSpeed * this.globalRotationSpeed);
      marsPivotPoint.rotateY(
        PlanetData.marsOrbitalSpeed * this.globalRotationSpeed
      );

      //Jupiter animation
      jupiter.position.set(PlanetData.jupiterDistance, 0, 0);
      jupiter.rotateY(
        PlanetData.jupiterRotationSpeed * this.globalRotationSpeed
      );
      jupiterPivotPoint.rotateY(
        PlanetData.jupiterOrbitalSpeed * this.globalRotationSpeed
      );

      //Saturn animation
      saturn.position.set(PlanetData.saturnDistance, 0, 0);
      saturn.rotateY(PlanetData.saturnRotationSpeed * this.globalRotationSpeed);
      saturnPivotPoint.rotateY(
        PlanetData.saturnOrbitalSpeed * this.globalRotationSpeed
      );
      saturnRings.position.set(PlanetData.saturnDistance, 0, 0);

      //Uranus animation
      uranus.position.set(PlanetData.uranusDistance, 0, 0);
      uranus.rotateY(PlanetData.uranusRotationSpeed * this.globalRotationSpeed);
      uranusPivotPoint.rotateY(
        PlanetData.uranusOrbitalSpeed * this.globalRotationSpeed
      );

      //Uranus animation
      neptune.position.set(PlanetData.neptuneDistance, 0, 0);
      neptune.rotateY(
        PlanetData.neptuneRotationSpeed * this.globalRotationSpeed
      );
      neptunePivotPoint.rotateY(
        PlanetData.neptuneOrbitalSpeed * this.globalRotationSpeed
      );

      //Orbits
      if (this.orbitTraceFlag) {
        sun.add(mercuryOrbit);
        sun.add(venusOrbit);
        sun.add(earthOrbit);
        sun.add(marsOrbit);
        sun.add(jupiterOrbit);
        sun.add(saturnOrbit);
        sun.add(uranusOrbit);
        sun.add(neptuneOrbit);
      } else {
        sun.remove(mercuryOrbit);
        sun.remove(venusOrbit);
        sun.remove(earthOrbit);
        sun.remove(marsOrbit);
        sun.remove(jupiterOrbit);
        sun.remove(saturnOrbit);
        sun.remove(uranusOrbit);
        sun.remove(neptuneOrbit);
      }

      //Rendering a scene
      interactionManager.update();
      this.renderer.render(scene, this.camera);
    });

    //Reading textures
    const sunTexture = new THREE.TextureLoader().load(PlanetTexture.sunTexture);
    const mercuryTexture = new THREE.TextureLoader().load(
      PlanetTexture.mercuryTexture
    );
    const venusTexture = new THREE.TextureLoader().load(
      PlanetTexture.venusTexture
    );
    const earthTexture = new THREE.TextureLoader().load(
      PlanetTexture.earthTexture
    );
    const marsTexture = new THREE.TextureLoader().load(
      PlanetTexture.marsTexture
    );
    const jupiterTexture = new THREE.TextureLoader().load(
      PlanetTexture.jupiterTexture
    );
    const moonTexture = new THREE.TextureLoader().load(
      PlanetTexture.moonTexture
    );
    const saturnTexture = new THREE.TextureLoader().load(
      PlanetTexture.saturnTexture
    );
    const saturnRingsTexture = new THREE.TextureLoader().load(
      PlanetTexture.saturnRingTexture
    );
    const uranusTexture = new THREE.TextureLoader().load(
      PlanetTexture.uranusTexture
    );
    const neptuneTexture = new THREE.TextureLoader().load(
      PlanetTexture.neptuneTexture
    );

    //Creating The Sun model
    const sunGeometry = new THREE.SphereGeometry(
      PlanetData.earthRadius * 5,
      64,
      32
    );
    const sunMaterial = new THREE.MeshBasicMaterial({
      map: sunTexture,
    });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    //Creating Mercury model
    const mercuryGeometry = new THREE.SphereGeometry(
      PlanetData.mercuryRadius,
      30,
      30
    );
    const mercuryMaterial = new THREE.MeshStandardMaterial({
      map: mercuryTexture,
    });
    const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
    mercury.name = 'Mercury';

    //Creating Mercury pivot point
    const mercuryPivotPoint = new THREE.Object3D();
    mercuryPivotPoint.rotateY(
      degToRad(AE.EclipticLongitude(AE.Body.Mercury, Date.date))
    );
    // mercuryPivotPoint.rotateZ(degToRad(PlanetData.mercuryOrbitalInclination));
    scene.add(mercuryPivotPoint);
    mercuryPivotPoint.add(mercury);

    const mercuryOrbitGeometry = new THREE.CylinderGeometry(
      PlanetData.mercuryDistance - 0.1,
      PlanetData.mercuryDistance + 0.1,
      0.1,
      300,
      1,
      true
    );
    const mercuryOrbitMaterial = new THREE.MeshBasicMaterial({
      color: '#a1a1aa',
      transparent: true,
      opacity: 0.15,
      depthTest: true,
      side: THREE.DoubleSide,
    });
    const mercuryOrbit = new THREE.Mesh(
      mercuryOrbitGeometry,
      mercuryOrbitMaterial
    );
    mercuryOrbit.rotateY(
      degToRad(AE.EclipticLongitude(AE.Body.Mercury, Date.date))
    );
    // mercuryOrbit.rotateZ(degToRad(PlanetData.mercuryOrbitalInclination));

    //-----------------------------
    //Creating Venus model
    //-----------------------------
    const venusGeometry = new THREE.SphereGeometry(
      PlanetData.venusRadius,
      30,
      30
    );
    const venusMaterial = new THREE.MeshStandardMaterial({
      map: venusTexture,
    });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.name = 'Venus';
    venus.rotateZ(degToRad(PlanetData.venusTilt));
    //Creating Mercury pivot point
    const venusPivotPoint = new THREE.Group();
    venusPivotPoint.rotateY(
      degToRad(AE.EclipticLongitude(AE.Body.Venus, Date.date))
    );
    // venusPivotPoint.rotateZ(degToRad(PlanetData.venusOrbitalInclination));
    scene.add(venusPivotPoint);
    venusPivotPoint.add(venus);
    const venusOrbitGeometry = new THREE.CylinderGeometry(
      PlanetData.venusDistance - 0.1,
      PlanetData.venusDistance + 0.1,
      0.1,
      300,
      1,
      true
    );
    const venusOrbitMaterial = new THREE.MeshBasicMaterial({
      color: '#fde68a',
      transparent: true,
      opacity: 0.15,
      depthTest: true,
      side: THREE.DoubleSide,
    });
    const venusOrbit = new THREE.Mesh(venusOrbitGeometry, venusOrbitMaterial);

    //Creating Earth model
    const earthGeometry = new THREE.SphereGeometry(
      PlanetData.earthRadius,
      30,
      30
    );
    const earthMaterial = new THREE.MeshStandardMaterial({
      map: earthTexture,
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    earth.name = 'Earth';
    earth.rotateY(degToRad(AE.EclipticLongitude(AE.Body.Earth, Date.date)));
    earth.rotateZ(degToRad(PlanetData.earthTilt));
    //Creating Earth pivot point
    const earthPivotPoint = new THREE.Group();
    earthPivotPoint.rotateY(
      degToRad(AE.EclipticLongitude(AE.Body.Earth, Date.date))
    );
    // earthPivotPoint.rotateZ(degToRad(PlanetData.earthOrbitalInclination));
    scene.add(earthPivotPoint);
    earthPivotPoint.add(earth);

    const earthOrbitGeometry = new THREE.CylinderGeometry(
      PlanetData.earthDistance - 0.1,
      PlanetData.earthDistance + 0.1,
      0.1,
      300,
      1,
      true
    );
    const earthOrbitMaterial = new THREE.MeshBasicMaterial({
      color: '#bae6fd',
      transparent: true,
      opacity: 0.15,
      depthTest: true,
      side: THREE.DoubleSide,
    });
    const earthOrbit = new THREE.Mesh(earthOrbitGeometry, earthOrbitMaterial);

    //-----------------------------
    //Creating Eeath's moon model
    //-----------------------------
    const moonGeometry = new THREE.SphereGeometry(
      PlanetData.moonRadius,
      30,
      30
    );
    const moonMaterial = new THREE.MeshStandardMaterial({
      map: moonTexture,
    });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
    earth.add(moon);

    //Creating Mars model
    const marsGeometry = new THREE.SphereGeometry(
      PlanetData.marsRadius,
      30,
      30
    );
    const marsMaterial = new THREE.MeshStandardMaterial({
      map: marsTexture,
    });
    const mars = new THREE.Mesh(marsGeometry, marsMaterial);
    mars.name = 'Mars';
    mars.rotateZ(degToRad(PlanetData.marsTilt));
    //Creating Mars pivot point
    const marsPivotPoint = new THREE.Group();
    marsPivotPoint.rotateY(
      degToRad(AE.EclipticLongitude(AE.Body.Mars, Date.date))
    );
    // marsPivotPoint.rotateZ(degToRad(PlanetData.marsOrbitalInclination));
    scene.add(marsPivotPoint);

    marsPivotPoint.add(mars);
    const marsOrbitGeometry = new THREE.CylinderGeometry(
      PlanetData.marsDistance - 0.1,
      PlanetData.marsDistance + 0.1,
      0.1,
      300,
      1,
      true
    );
    const marsOrbitMaterial = new THREE.MeshBasicMaterial({
      color: '#ea580c',
      transparent: true,
      opacity: 0.15,
      depthTest: true,
      side: THREE.DoubleSide,
    });
    const marsOrbit = new THREE.Mesh(marsOrbitGeometry, marsOrbitMaterial);

    //Creating Jupiter model
    const jupiterGeometry = new THREE.SphereGeometry(
      PlanetData.jupiterRadius,
      30,
      30
    );
    const jupiterMaterial = new THREE.MeshStandardMaterial({
      map: jupiterTexture,
    });
    const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
    jupiter.name = 'Jupiter';
    jupiter.rotateZ(degToRad(PlanetData.jupiterTilt));
    //Creating Jupiter pivot point
    const jupiterPivotPoint = new THREE.Group();
    jupiterPivotPoint.rotateY(
      degToRad(AE.EclipticLongitude(AE.Body.Jupiter, Date.date))
    );
    // jupiterPivotPoint.rotateZ(degToRad(PlanetData.jupiterOrbitalInclination));
    scene.add(jupiterPivotPoint);
    jupiterPivotPoint.add(jupiter);
    const jupiterOrbitGeometry = new THREE.CylinderGeometry(
      PlanetData.jupiterDistance - 0.7,
      PlanetData.jupiterDistance + 0.7,
      0.7,
      300,
      1,
      true
    );
    const jupiterOrbitMaterial = new THREE.MeshBasicMaterial({
      color: '#92400e',
      transparent: true,
      opacity: 0.2,
      depthTest: true,
      side: THREE.DoubleSide,
    });
    const jupiterOrbit = new THREE.Mesh(
      jupiterOrbitGeometry,
      jupiterOrbitMaterial
    );

    //Creating Saturn model
    const saturnGeometry = new THREE.SphereGeometry(
      PlanetData.saturnRadius,
      30,
      30
    );
    const saturnMaterial = new THREE.MeshStandardMaterial({
      map: saturnTexture,
    });
    const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
    saturn.name = 'Saturn';
    saturn.rotateZ(degToRad(PlanetData.saturnTilt));
    const saturnOrbitGeometry = new THREE.CylinderGeometry(
      PlanetData.saturnDistance - 1,
      PlanetData.saturnDistance + 1,
      1,
      300000,
      1,
      true
    );
    const saturnOrbitMaterial = new THREE.MeshBasicMaterial({
      color: '#fef3c7',
      transparent: true,
      opacity: 0.1,
      depthTest: true,
      side: THREE.DoubleSide,
    });
    const saturnOrbit = new THREE.Mesh(
      saturnOrbitGeometry,
      saturnOrbitMaterial
    );

    //Creating Saturn rings
    const saturnRingsGeometry = new THREE.CylinderGeometry(
      PlanetData.saturnRadius * 2 - 30,
      PlanetData.saturnRadius * 2 + 10,
      1,
      64,
      1,
      true
    );

    const saturnRingsMaterial = new THREE.MeshStandardMaterial({
      map: saturnRingsTexture,
      side: THREE.DoubleSide,
      transparent: true,
      depthTest: true,
    });

    const saturnRings = new THREE.Mesh(
      saturnRingsGeometry,
      saturnRingsMaterial
    );
    saturnRings.rotateZ(degToRad(PlanetData.saturnTilt));
    //Creating Saturn pivot point
    const saturnPivotPoint = new THREE.Group();
    saturnPivotPoint.rotateY(
      degToRad(AE.EclipticLongitude(AE.Body.Saturn, Date.date))
    );
    // saturnPivotPoint.rotateZ(degToRad(PlanetData.saturnOrbitalInclination));
    scene.add(saturnPivotPoint);
    saturnPivotPoint.add(saturn);
    saturnPivotPoint.add(saturnRings);

    //Creating Uranus model
    const uranusGeometry = new THREE.SphereGeometry(
      PlanetData.uranusRadius,
      30,
      30
    );
    const uranusMaterial = new THREE.MeshStandardMaterial({
      map: uranusTexture,
    });
    const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
    uranus.name = 'Uranus';
    uranus.rotateZ(degToRad(PlanetData.uranusTilt));
    //Creating Uranus pivot point
    const uranusPivotPoint = new THREE.Group();
    uranusPivotPoint.rotateY(
      degToRad(AE.EclipticLongitude(AE.Body.Uranus, Date.date))
    );
    // uranusPivotPoint.rotateZ(degToRad(PlanetData.uranusOrbitalInclination));
    scene.add(uranusPivotPoint);
    uranusPivotPoint.add(uranus);
    const uranusOrbitGeometry = new THREE.CylinderGeometry(
      PlanetData.uranusDistance - 1,
      PlanetData.uranusDistance + 1,
      1,
      300000,
      1,
      true
    );
    const uranusOrbitMaterial = new THREE.MeshBasicMaterial({
      color: '#a5f3fc',
      transparent: true,
      opacity: 0.35,
      depthTest: true,
      side: THREE.DoubleSide,
    });
    const uranusOrbit = new THREE.Mesh(
      uranusOrbitGeometry,
      uranusOrbitMaterial
    );

    //Creating Neptune model
    const neptuneGeometry = new THREE.SphereGeometry(
      PlanetData.neptuneRadius,
      30,
      30
    );
    const neptuneMaterial = new THREE.MeshStandardMaterial({
      map: neptuneTexture,
    });
    const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
    neptune.name = 'Neptune';
    neptune.rotateZ(degToRad(PlanetData.neptuneTilt));
    //Creating Neptune pivot point
    const neptunePivotPoint = new THREE.Group();
    neptunePivotPoint.rotateY(
      degToRad(AE.EclipticLongitude(AE.Body.Neptune, Date.date))
    );
    // neptunePivotPoint.rotateZ(degToRad(PlanetData.neptuneOrbitalInclination));
    scene.add(neptunePivotPoint);
    neptunePivotPoint.add(neptune);
    const neptuneOrbitGeometry = new THREE.CylinderGeometry(
      PlanetData.neptuneDistance - 1,
      PlanetData.neptuneDistance + 1,
      1,
      300000,
      1,
      true
    );
    const neptuneOrbitMaterial = new THREE.MeshBasicMaterial({
      color: '#7dd3fc',
      transparent: true,
      opacity: 0.35,
      depthTest: true,
      side: THREE.DoubleSide,
    });
    const neptuneOrbit = new THREE.Mesh(
      neptuneOrbitGeometry,
      neptuneOrbitMaterial
    );

    //Add light from The Sun
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.015);
    const pointLight = new THREE.PointLight(0xffffff, 1.2137, 3500000);

    sun.add(ambientLight);
    sun.add(pointLight);

    let planets = [
      mercury,
      venus,
      earth,
      mars,
      jupiter,
      saturn,
      uranus,
      neptune,
    ];

    planets.forEach((planet) => {
      interactionManager.add(planet);
      planet.addEventListener('click', (event) => {
        this.dataService.getPlanetData(planet.name).subscribe((res) => {
          this.examplePlanetName = res;
          if (res.moons !== null)
            this.examplePlanetName.moons = res.moons.length;
          else {
            this.examplePlanetName.moons = '0';
          }
          this.examplePlanetName.massValue = res.mass.massValue;
          this.examplePlanetName.massExponent = res.mass.massExponent;
          this.examplePlanetName.avgTemp = (res.avgTemp - 272.15).toFixed(1);
        });
      });
    });
  }

  ngOnInit(): void {}

  changeSpeed(value: number) {
    this.globalRotationSpeed = 0.044;
    this.globalRotationSpeed *= value;
  }
  orbits() {
    this.orbitTraceFlag = !this.orbitTraceFlag;
    console.log(this.orbitTraceFlag);
  }
}
