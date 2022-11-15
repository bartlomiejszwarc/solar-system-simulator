import * as THREE from 'three'
import * as PlanetGeometry from 'src/app/helpers/PlanetGeometry'
import * as PlanetMaterial from 'src/app/helpers/PlanetMaterial'

export const mercuryOrbit = new THREE.Mesh(
    PlanetGeometry.mercuryOrbitGeometry,
    PlanetMaterial.mercuryOrbitMaterial
)

export const venusOrbit = new THREE.Mesh(
    PlanetGeometry.venusOrbitGeometry,
    PlanetMaterial.venusOrbitMaterial
)

export const earthOrbit = new THREE.Mesh(
    PlanetGeometry.earthOrbitGeometry,
    PlanetMaterial.earthOrbitMaterial
)

export const marsOrbit = new THREE.Mesh(
    PlanetGeometry.marsOrbitGeometry,
    PlanetMaterial.marsOrbitMaterial
)

export const jupiterOrbit = new THREE.Mesh(
    PlanetGeometry.jupiterOrbitGeometry,
    PlanetMaterial.jupiterOrbitMaterial
)

export const saturnOrbit = new THREE.Mesh(
    PlanetGeometry.saturnOrbitGeometry,
    PlanetMaterial.saturnOrbitMaterial
)

export const uranusOrbit = new THREE.Mesh(
    PlanetGeometry.uranusOrbitGeometry,
    PlanetMaterial.uranusOrbitMaterial
)

export const neptuneOrbit = new THREE.Mesh(
    PlanetGeometry.neptuneOrbitGeometry,
    PlanetMaterial.neptuneOrbitMaterial
)

export let orbits = [
    mercuryOrbit,
    venusOrbit,
    earthOrbit,
    marsOrbit,
    jupiterOrbit,
    saturnOrbit,
    uranusOrbit,
    neptuneOrbit
]
