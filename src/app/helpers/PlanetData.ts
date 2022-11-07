//Planets orbital speed (in days)
import * as PivotPoint from 'src/app/helpers/PivotPoint';

export const mercuryOrbitalSpeed: number = 1 / 88;
export const venusOrbitalSpeed: number = 1 / 225;
export const earthOrbitalSpeed: number = 1 / 365;
export const marsOrbitalSpeed: number = 1 / 687;
export const jupiterOrbitalSpeed: number = 1 / 4333;
export const saturnOrbitalSpeed: number = 1 / 10759;
export const uranusOrbitalSpeed: number = 1 / 30687;
export const neptuneOrbitalSpeed: number = 1 / 60190;
export const moonOrbitalSpeed: number = 1 / 29.5;

//Planets spin time in minutes
export const earthSpinInMinutes: number = 1436;
export const mercurySpinInMinutes: number = -84480;
export const venusSpinInMinutes: number = 349946;
export const marsSpinInMinutes: number = 1476;
export const jupiterSpinInMinutes: number = 595;
export const saturnSpinInMinutes: number = 633;
export const uranusSpinInMinutes: number = -1034;
export const neptuneSpinInMinutes: number = 960;
export const moonSpinInMinutes: number = 39312;

//Planets orbital speeds
export const earthRotationSpeed: number = 1;
export const mercuryRotationSpeed: number =
  earthSpinInMinutes / mercurySpinInMinutes;
export const venusRotationSpeed: number =
  earthSpinInMinutes / venusSpinInMinutes;
export const marsRotationSpeed: number = earthSpinInMinutes / marsSpinInMinutes;
export const jupiterRotationSpeed: number =
  earthSpinInMinutes / jupiterSpinInMinutes;
export const saturnRotationSpeed: number =
  earthSpinInMinutes / saturnSpinInMinutes;
export const uranusRotationSpeed: number =
  earthSpinInMinutes / uranusSpinInMinutes;
export const neptuneRotationSpeed: number =
  earthSpinInMinutes / neptuneSpinInMinutes;
export const moonRotationSpeed: number = earthRotationSpeed / moonSpinInMinutes;

//Planet sizes
export const earthRadius: number = 4;
export const moonRadius: number = earthRadius * 0.27;
export const mercuryRadius: number = earthRadius * 0.38;
export const venusRadius: number = earthRadius * 0.95;
export const marsRadius: number = earthRadius * 0.53;
export const jupiterRadius: number = earthRadius * 10.97;
export const saturnRadius: number = earthRadius * 9.14;
export const uranusRadius: number = earthRadius * 3.981;
export const neptuneRadius: number = earthRadius * 3.865;

//Planet distance from The Sun
export const mercuryDistance: number = 35;
export const venusDistance: number = 67;
export const earthDistance: number = 93;
export const marsDistance: number = 142;
export const jupiterDistance: number = 484;
export const saturnDistance: number = 889;
export const uranusDistance: number = 1790;
export const neptuneDistance: number = 2880;

//Planets tilts in degrees
export const venusTilt: number = 177.3;
export const earthTilt: number = 23.26;
export const marsTilt: number = 25.19;
export const jupiterTilt: number = 3.13;
export const saturnTilt: number = 26.73;
export const uranusTilt: number = 97.77;
export const neptuneTilt: number = 28.32;

//Planets orbital inclination in degrees
export const mercuryOrbitalInclination: number = 7.0;
export const venusOrbitalInclination: number = 3.4;
export const earthOrbitalInclination: number = 0;
export const moonOrbitalInclination: number = 5.1;
export const marsOrbitalInclination: number = 1.8;
export const jupiterOrbitalInclination: number = 1.3;
export const saturnOrbitalInclination: number = 2.5;
export const uranusOrbitalInclination: number = 0.8;
export const neptuneOrbitalInclination: number = 1.8;

//Moon distance from The Earth
export const moonDistanceFromEarth: number = earthRadius + 3.84;

export let distancesArray = [
  mercuryDistance,
  venusDistance,
  earthDistance,
  marsDistance,
  jupiterDistance,
  saturnDistance,
  uranusDistance,
  neptuneDistance,
];

export let rotationSpeedArray = [
  mercuryRotationSpeed,
  venusRotationSpeed,
  earthRotationSpeed,
  marsRotationSpeed,
  jupiterRotationSpeed,
  saturnRotationSpeed,
  uranusRotationSpeed,
  neptuneRotationSpeed,
];

export let orbitalSpeedArray = [
  mercuryOrbitalSpeed,
  venusOrbitalSpeed,
  earthOrbitalSpeed,
  marsOrbitalSpeed,
  jupiterOrbitalSpeed,
  saturnOrbitalSpeed,
  uranusOrbitalSpeed,
  neptuneOrbitalSpeed,
];
