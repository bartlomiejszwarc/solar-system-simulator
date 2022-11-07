export interface Planet {
  planet: string;
  englishName: string;
  moons: string;
  semimajorAxis: string;
  perihelion: string;
  aphelion: string;
  mass: Array<mass>;
  massValue: string;
  massExponent: string;
  meanRadius: string;
  sideralRotation: string;
  sideralOrbit: string;
  avgTemp: string;
  illumination: string;
}
export interface mass {
  massValue: number;
  massExponent: number;
}
