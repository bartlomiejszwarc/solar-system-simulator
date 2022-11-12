import * as THREE from 'three';
import * as PlanetGeometry from 'src/app/helpers/PlanetGeometry';
import * as PlanetMaterial from 'src/app/helpers/PlanetMaterial';
import * as PlanetData from 'src/app/helpers/PlanetData';
import { degToRad } from 'three/src/math/MathUtils';
import * as AE from 'astronomy-engine';
import * as Date from 'src/app/helpers/Date';

export const sun = new THREE.Mesh(
  PlanetGeometry.sunGeometry,
  PlanetMaterial.sunMaterial
);

export const mercury = new THREE.Mesh(
  PlanetGeometry.mercuryGeometry,
  PlanetMaterial.mercuryMaterial
);
mercury.name = 'Mercury';

export const venus = new THREE.Mesh(
  PlanetGeometry.venusGeometry,
  PlanetMaterial.venusMaterial
);
venus.name = 'Venus';
venus.rotateZ(degToRad(PlanetData.venusTilt));

export const earth = new THREE.Mesh(
  PlanetGeometry.earthGeometry,
  PlanetMaterial.earthMaterial
);
earth.name = 'Earth';
earth.rotateZ(degToRad(PlanetData.earthTilt));

export const moon = new THREE.Mesh(
  PlanetGeometry.moonGeometry,
  PlanetMaterial.moonMaterial
);

export const mars = new THREE.Mesh(
  PlanetGeometry.marsGeometry,
  PlanetMaterial.marsMaterial
);
mars.name = 'Mars';
mars.rotateZ(degToRad(PlanetData.marsTilt));

export const jupiter = new THREE.Mesh(
  PlanetGeometry.jupiterGeometry,
  PlanetMaterial.jupiterMaterial
);
jupiter.name = 'Jupiter';
jupiter.rotateZ(degToRad(PlanetData.jupiterTilt));

export const saturn = new THREE.Mesh(
  PlanetGeometry.saturnGeometry,
  PlanetMaterial.saturnMaterial
);
saturn.name = 'Saturn';
saturn.rotateZ(degToRad(PlanetData.saturnTilt));

export const saturnRings = new THREE.Mesh(
  PlanetGeometry.saturnRingsGeometry,
  PlanetMaterial.saturnRingsMaterial
);

saturnRings.rotateZ(degToRad(PlanetData.saturnTilt));

export const uranus = new THREE.Mesh(
  PlanetGeometry.uranusGeometry,
  PlanetMaterial.uranusMaterial
);
uranus.name = 'Uranus';
uranus.rotateZ(degToRad(PlanetData.uranusTilt));

export const neptune = new THREE.Mesh(
  PlanetGeometry.neptuneGeometry,
  PlanetMaterial.neptuneMaterial
);
neptune.name = 'Neptune';
neptune.rotateZ(degToRad(PlanetData.neptuneTilt));

export let planets = [
  mercury,
  venus,
  earth,
  mars,
  jupiter,
  saturn,
  uranus,
  neptune,
];
