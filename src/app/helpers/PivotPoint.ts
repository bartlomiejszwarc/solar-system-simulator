import * as THREE from 'three';
import * as Date from 'src/app/helpers/Date';
import * as AE from 'astronomy-engine';
import * as PlanetObject from 'src/app/helpers/PlanetObject';
import { degToRad } from 'three/src/math/MathUtils';

export const mercuryPivotPoint = new THREE.Object3D();
mercuryPivotPoint.rotateY(
  degToRad(AE.EclipticLongitude(AE.Body.Mercury, Date.date))
);
mercuryPivotPoint.add(PlanetObject.mercury);

export const venusPivotPoint = new THREE.Group();
venusPivotPoint.rotateY(
  degToRad(AE.EclipticLongitude(AE.Body.Venus, Date.date))
);
venusPivotPoint.add(PlanetObject.venus);

export const earthPivotPoint = new THREE.Group();
earthPivotPoint.rotateY(
  degToRad(AE.EclipticLongitude(AE.Body.Earth, Date.date))
);
earthPivotPoint.add(PlanetObject.earth);

export const marsPivotPoint = new THREE.Group();
marsPivotPoint.rotateY(degToRad(AE.EclipticLongitude(AE.Body.Mars, Date.date)));
marsPivotPoint.add(PlanetObject.mars);

export const jupiterPivotPoint = new THREE.Group();
jupiterPivotPoint.rotateY(
  degToRad(AE.EclipticLongitude(AE.Body.Jupiter, Date.date))
);
jupiterPivotPoint.add(PlanetObject.jupiter);

export const saturnPivotPoint = new THREE.Group();
saturnPivotPoint.rotateY(
  degToRad(AE.EclipticLongitude(AE.Body.Saturn, Date.date))
);
saturnPivotPoint.add(PlanetObject.saturn);
saturnPivotPoint.add(PlanetObject.saturnRings);

export const uranusPivotPoint = new THREE.Group();
uranusPivotPoint.rotateY(
  degToRad(AE.EclipticLongitude(AE.Body.Uranus, Date.date))
);
uranusPivotPoint.add(PlanetObject.uranus);

export const neptunePivotPoint = new THREE.Group();
neptunePivotPoint.rotateY(
  degToRad(AE.EclipticLongitude(AE.Body.Neptune, Date.date))
);
neptunePivotPoint.add(PlanetObject.neptune);

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
