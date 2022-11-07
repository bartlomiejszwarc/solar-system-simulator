import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Options } from '@angular-slider/ngx-slider';
import { DataService } from 'src/app/services/data.service';
import * as PlanetData from 'src/app/helpers/PlanetData';
import * as PlanetTexture from 'src/app/helpers/PlanetTexture';
import * as PlanetObject from 'src/app/helpers/PlanetObject';
import * as PivotPoint from 'src/app/helpers/PivotPoint';
import * as PlanetOrbit from 'src/app/helpers/PlanetOrbit';
import { InteractionManager } from 'three.interactive';
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
  planetName!: Planet;
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

  constructor(private dataService: DataService) {
    const interactionManager = new InteractionManager(
      this.renderer,
      this.camera,
      this.renderer.domElement,
      false
    );
    const scene = new THREE.Scene();

    //Creating a renderer
    this.renderer.setPixelRatio(2);
    this.renderer.setSize(window.innerWidth, window.innerHeight); // setting its size to match window inner width and height
    document.body.appendChild(this.renderer.domElement);

    //Creating a camera to look around the scene and set inital view
    this.camera.position.set(250, 250, 250);
    const orbit = new OrbitControls(this.camera, this.renderer.domElement);

    scene.background = PlanetTexture.backgroundTextureMap;

    //Adding sun to scene
    scene.add(PlanetObject.sun);

    //Adding pivot points to scene
    PivotPoint.pivotPointArray.forEach((pivotPoint) => {
      scene.add(pivotPoint);
    });

    //Adding light from The Sun
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.015);
    const pointLight = new THREE.PointLight(0xffffff, 1.2137, 3500000);
    PlanetObject.sun.add(ambientLight);
    PlanetObject.sun.add(pointLight);

    PlanetObject.planets.forEach((planet) => {
      interactionManager.add(planet);
      planet.addEventListener('click', () => {
        this.dataService.getPlanetData(planet.name).subscribe((res) => {
          this.planetName = res;
          if (res.moons !== null) this.planetName.moons = res.moons.length;
          else {
            this.planetName.moons = '0';
          }
          this.planetName.massValue = res.mass.massValue;
          this.planetName.massExponent = res.mass.massExponent;
          this.planetName.avgTemp = (res.avgTemp - 272.15).toFixed(1);
          if (res.sideralOrbit > 364) {
            this.planetName.sideralOrbit =
              (res.sideralOrbit / 356).toFixed(1) + ' Earth years ';
          } else {
            this.planetName.sideralOrbit =
              res.sideralOrbit.toFixed(1) + ' Earth days';
          }
          if (Math.abs(res.sideralRotation) > 24) {
            this.planetName.sideralRotation =
              (Math.abs(res.sideralRotation) / 24).toFixed(1) + ' Earth days ';
          } else {
            this.planetName.sideralRotation =
              Math.abs(res.sideralRotation).toFixed(1) + ' hours';
          }
        });
      });
    });

    this.renderer.setAnimationLoop(() => {
      for (var i = 0; i < PlanetObject.planets.length; i++) {
        PlanetObject.planets[i].position.set(
          PlanetData.distancesArray[i],
          0,
          0
        );
        PlanetObject.planets[i].rotateY(
          PlanetData.rotationSpeedArray[i] * this.globalRotationSpeed
        );
        PivotPoint.pivotPointArray[i].rotateY(
          PlanetData.orbitalSpeedArray[i] * this.globalRotationSpeed
        );
      }
      PlanetObject.saturnRings.position.set(PlanetData.saturnDistance, 0, 0);

      if (this.orbitTraceFlag) {
        PlanetOrbit.orbits.forEach((orbit) => {
          PlanetObject.sun.add(orbit);
        });
      } else {
        PlanetOrbit.orbits.forEach((orbit) => {
          PlanetObject.sun.remove(orbit);
        });
      }

      interactionManager.update();
      this.renderer.render(scene, this.camera);
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
