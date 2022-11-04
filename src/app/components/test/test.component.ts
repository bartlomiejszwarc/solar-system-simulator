import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { degToRad } from 'three/src/math/MathUtils';
import * as AE from 'astronomy-engine';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  //Planets rotations speed
  sunRotationSpeed: number = 0;
  mercuryRotationSpeed: number = 0.003;
  venusRotationSpeed: number = 0.001;
  marsRotationSpeed: number = 0.24;
  earthRotationSpeed: number = 0.44;
  moonRotationSpeed: number = 0.004;
  jupiterRotationSpeed: number = 12.66;
  saturnRotationSpeed: number = 10.23;

  //Planets orbital speed (in km/s)
  mercuryOrbitalSpeed: number = 47.9;
  venusOrbitalSpeed: number = 35;
  earthOrbitalSpeed: number = 29.8;
  marsOrbitalSpeed: number = 24.1;
  jupiterOrbitalSpeed: number = 13.1;
  saturnOrbitalSpeed: number = 9.7;

  //Planet sizes
  earthRadius: number = 3;
  moonRadius: number = this.earthRadius * 0.27;
  mercuryRadius: number = this.earthRadius * 0.38;
  venusRadius: number = this.earthRadius * 0.95;
  marsRadius: number = this.earthRadius * 0.53;
  jupiterRadius: number = this.earthRadius * 10.97;
  saturnRadius: number = this.earthRadius * 9.14;

  //Planet distance from The Sun
  mercuryDistance: number = 35;
  venusDistance: number = 67;
  earthDistance: number = 93;
  marsDistance: number = 142;
  jupiterDistance: number = 484;
  saturnDistance: number = 889;

  //Moon distance from The Earth
  moonDistanceFromEarth: number = this.earthRadius + 3;

  //Global speed
  globalRotationSpeed = 0.000001;
  cameraFov = 45;
  earth = new THREE.Mesh();

  renderer = new THREE.WebGLRenderer({ antialias: true });
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    this.cameraFov,
    window.innerWidth / window.innerHeight,
    0.1,
    30000 //render distance
  );

  constructor() {
    const moonDistanceFromEarth = this.moonDistanceFromEarth;

    //Calculating today's date for planets eclipse longitude
    const date = this.daysSinceMilleniumFromToday(new Date());

    //Creating a renderer
    const renderer = this.renderer;
    renderer.setSize(window.innerWidth, window.innerHeight); // setting its size to match window inner width and height
    document.body.appendChild(renderer.domElement);

    //Creating a scene to display models
    const scene = this.scene;

    //Creating a CubeTextureLoader; to set a cube background
    const cubeTextureLoader = new THREE.CubeTextureLoader();
    scene.background = cubeTextureLoader.load([
      'assets/textures/stars-background.jpg',
      'assets/textures/stars-background.jpg',
      'assets/textures/stars-background.jpg',
      'assets/textures/stars-background.jpg',
      'assets/textures/stars-background.jpg',
      'assets/textures/stars-background.jpg',
    ]);

    //Creating a camera to look around the scene and set inital view
    const camera = this.camera;
    camera.position.set(0, 360, 180);

    //Creating an orbit that allows to orbit camera around the target
    const orbit = new OrbitControls(camera, renderer.domElement);

    const texture = new THREE.TextureLoader().load(
      'assets/textures/stars-background.jpg',
      function (this: any) {}
    );
    renderer.setAnimationLoop(() => {
      //Mercury animation
      mercury.position.set(this.mercuryDistance, 0, 0);
      mercury.rotateY(this.mercuryRotationSpeed * this.globalRotationSpeed);
      mercuryPivotPoint.position.set(0, 0, 0);
      mercuryPivotPoint.rotateY(
        this.mercuryOrbitalSpeed * this.globalRotationSpeed
      );

      //Venus animation
      venus.position.set(this.venusDistance, 0, 0);
      venus.rotateY(this.venusRotationSpeed * this.globalRotationSpeed);
      venusPivotPoint.rotateY(
        this.venusOrbitalSpeed * this.globalRotationSpeed
      );

      //Earth animation
      earth.position.set(this.earthDistance, 0, 0);
      earth.rotateY(this.earthRotationSpeed * this.globalRotationSpeed);
      earthPivotPoint.rotateY(
        this.earthOrbitalSpeed * this.globalRotationSpeed
      );

      //Moon animation
      moon.position.set(this.moonDistanceFromEarth, 0, 0);
      moon.rotateY(this.moonRotationSpeed * this.globalRotationSpeed);

      //Mars animation
      mars.position.set(this.marsDistance, 0, 0);
      mars.rotateY(this.marsRotationSpeed * this.globalRotationSpeed);
      marsPivotPoint.rotateY(this.marsOrbitalSpeed * this.globalRotationSpeed);

      //Jupiter animation
      jupiter.position.set(this.jupiterDistance, 0, 0);
      jupiter.rotateY(this.jupiterRotationSpeed * this.globalRotationSpeed);
      jupiterPivotPoint.rotateY(
        this.jupiterOrbitalSpeed * this.globalRotationSpeed
      );

      //Saturn animation
      saturn.position.set(this.saturnDistance, 0, 0);
      saturn.rotateY(this.saturnRotationSpeed * this.globalRotationSpeed);
      saturnPivotPoint.rotateY(
        this.saturnOrbitalSpeed * this.globalRotationSpeed
      );
      //Rendering a scene
      renderer.render(scene, camera);
    });

    //Reading textures
    const sunTexture = new THREE.TextureLoader().load(
      'assets/textures/sun-texture.jpg'
    );
    const mercuryTexture = new THREE.TextureLoader().load(
      'assets/textures/mercury-texture.webp'
    );
    const venusTexture = new THREE.TextureLoader().load(
      'assets/textures/venus-texture.jpg'
    );
    const earthTexture = new THREE.TextureLoader().load(
      'assets/textures/earth-texture.jpg'
    );
    const marsTexture = new THREE.TextureLoader().load(
      'assets/textures/mars-texture.jpg'
    );
    const jupiterTexture = new THREE.TextureLoader().load(
      'assets/textures/jupiter-texture.jpg'
    );
    const moonTexture = new THREE.TextureLoader().load(
      'assets/textures/moon-texture.jpg'
    );
    const saturnTexture = new THREE.TextureLoader().load(
      'assets/textures/saturn-texture.jpg'
    );

    //Creating The Sun model
    const sunGeometry = new THREE.SphereGeometry(this.earthRadius * 5, 64, 32); //setting geometry to Sphere and size
    const sunMaterial = new THREE.MeshBasicMaterial({
      map: sunTexture,
    });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    //Creating Mercury model
    const mercuryGeometry = new THREE.SphereGeometry(
      this.mercuryRadius,
      30,
      30
    );
    const mercuryMaterial = new THREE.MeshStandardMaterial({
      map: mercuryTexture,
    });
    const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);

    //Creating Mercury pivot point
    const mercuryPivotPoint = new THREE.Object3D();
    mercuryPivotPoint.rotateY(
      degToRad(AE.EclipticLongitude(AE.Body.Mercury, date))
    );
    scene.add(mercuryPivotPoint);
    mercuryPivotPoint.add(mercury);

    //Creating Venus model
    const venusGeometry = new THREE.SphereGeometry(this.venusRadius, 30, 30);
    const venusMaterial = new THREE.MeshStandardMaterial({
      map: venusTexture,
    });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);

    //Creating Mercury pivot point
    const venusPivotPoint = new THREE.Group();
    venusPivotPoint.rotateY(
      degToRad(AE.EclipticLongitude(AE.Body.Venus, date))
    );
    scene.add(venusPivotPoint);
    venusPivotPoint.add(venus);

    //Creating Earth model
    const earthGeometry = new THREE.SphereGeometry(this.earthRadius, 30, 30);
    const earthMaterial = new THREE.MeshStandardMaterial({
      map: earthTexture,
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    //Creating Earth pivot point
    const earthPivotPoint = new THREE.Group();
    earthPivotPoint.rotateY(
      degToRad(AE.EclipticLongitude(AE.Body.Earth, date))
    );
    scene.add(earthPivotPoint);
    earthPivotPoint.add(earth);

    //Creating Eeath's moon model
    const moonGeometry = new THREE.SphereGeometry(this.moonRadius, 30, 30);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
    earth.add(moon);

    //Creating Mars model
    const marsGeometry = new THREE.SphereGeometry(this.marsRadius, 30, 30);
    const marsMaterial = new THREE.MeshStandardMaterial({
      map: marsTexture,
    });
    const mars = new THREE.Mesh(marsGeometry, marsMaterial);
    //Creating Mars pivot point
    const marsPivotPoint = new THREE.Group();
    marsPivotPoint.rotateY(degToRad(AE.EclipticLongitude(AE.Body.Mars, date)));
    scene.add(marsPivotPoint);
    marsPivotPoint.add(mars);

    //Creating Jupiter model
    const jupiterGeometry = new THREE.SphereGeometry(
      this.jupiterRadius,
      30,
      30
    );
    const jupiterMaterial = new THREE.MeshStandardMaterial({
      map: jupiterTexture,
    });
    const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
    //Creating Jupiter pivot point
    const jupiterPivotPoint = new THREE.Group();
    jupiterPivotPoint.rotateY(
      degToRad(AE.EclipticLongitude(AE.Body.Jupiter, date))
    );
    scene.add(jupiterPivotPoint);
    jupiterPivotPoint.add(jupiter);

    //Creating Saturn model
    const saturnGeometry = new THREE.SphereGeometry(this.saturnRadius, 30, 30);
    const saturnMaterial = new THREE.MeshStandardMaterial({
      map: saturnTexture,
    });
    const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
    //Creating Saturn pivot point
    const saturnPivotPoint = new THREE.Group();
    saturnPivotPoint.rotateY(
      degToRad(AE.EclipticLongitude(AE.Body.Saturn, date))
    );
    scene.add(saturnPivotPoint);
    saturnPivotPoint.add(saturn);

    //Add light from The Sun
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.03);
    const pointLight = new THREE.PointLight(0xfffff6, 1.5, 2000);
    sun.add(ambientLight);
    sun.add(pointLight);
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  changeSpeed() {
    console.log(this.globalRotationSpeed); // result: 3
    this.globalRotationSpeed = 1; //not working
    console.log(this.globalRotationSpeed); // result: 10
  }

  daysSinceMilleniumFromToday(today: Date): number {
    const millenium = new Date('2000/1/1');
    const difference = today.getTime() - millenium.getTime();
    const res = difference / (1000 * 3600 * 24);
    return res;
  }
}
