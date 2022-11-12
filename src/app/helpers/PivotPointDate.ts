import * as THREE from 'three';
import * as Date from 'src/app/helpers/Date';
import * as AE from 'astronomy-engine';
import * as PlanetObjectData from 'src/app/helpers/PlanetObjectData';
import { degToRad } from 'three/src/math/MathUtils';

export const mercuryPivotPoint = new THREE.Object3D();
mercuryPivotPoint.rotateY(
  degToRad(AE.EclipticLongitude(AE.Body.Mercury, Date.date))
);
mercuryPivotPoint.add(PlanetObjectData.mercury);

export const venusPivotPoint = new THREE.Group();
venusPivotPoint.rotateY(
  degToRad(AE.EclipticLongitude(AE.Body.Venus, Date.date))
);
venusPivotPoint.add(PlanetObjectData.venus);

export const earthPivotPoint = new THREE.Group();
earthPivotPoint.rotateY(
  degToRad(AE.EclipticLongitude(AE.Body.Earth, Date.date))
);
earthPivotPoint.add(PlanetObjectData.earth);

export const marsPivotPoint = new THREE.Group();
marsPivotPoint.rotateY(degToRad(AE.EclipticLongitude(AE.Body.Mars, Date.date)));
marsPivotPoint.add(PlanetObjectData.mars);

export const jupiterPivotPoint = new THREE.Group();
jupiterPivotPoint.rotateY(
  degToRad(AE.EclipticLongitude(AE.Body.Jupiter, Date.date))
);
jupiterPivotPoint.add(PlanetObjectData.jupiter);

export const saturnPivotPoint = new THREE.Group();
saturnPivotPoint.rotateY(
  degToRad(AE.EclipticLongitude(AE.Body.Saturn, Date.date))
);
saturnPivotPoint.add(PlanetObjectData.saturn);
saturnPivotPoint.add(PlanetObjectData.saturnRings);

export const uranusPivotPoint = new THREE.Group();
uranusPivotPoint.rotateY(
  degToRad(AE.EclipticLongitude(AE.Body.Uranus, Date.date))
);
uranusPivotPoint.add(PlanetObjectData.uranus);

export const neptunePivotPoint = new THREE.Group();
neptunePivotPoint.rotateY(
  degToRad(AE.EclipticLongitude(AE.Body.Neptune, Date.date))
);
neptunePivotPoint.add(PlanetObjectData.neptune);

export let planetBody = [
  AE.Body.Mercury,
  AE.Body.Venus,
  AE.Body.Earth,
  AE.Body.Mars,
  AE.Body.Jupiter,
  AE.Body.Saturn,
  AE.Body.Uranus,
  AE.Body.Neptune,
];
export let pivotPointArray = [
  mercuryPivotPoint,
  venusPivotPoint,
  earthPivotPoint,
  marsPivotPoint,
  jupiterPivotPoint,
  saturnPivotPoint,
  uranusPivotPoint,
  neptunePivotPoint,
];
