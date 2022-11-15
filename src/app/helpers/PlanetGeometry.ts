import * as PlanetData from 'src/app/helpers/PlanetData'
import * as THREE from 'three'

export const sunGeometry = new THREE.SphereGeometry(PlanetData.earthRadius * 5, 64, 32)

export const mercuryGeometry = new THREE.SphereGeometry(PlanetData.mercuryRadius, 30, 30)
export const mercuryOrbitGeometry = new THREE.CylinderGeometry(
    PlanetData.mercuryDistance - 0.1,
    PlanetData.mercuryDistance + 0.1,
    0.1,
    300,
    1,
    true
)

export const venusGeometry = new THREE.SphereGeometry(PlanetData.venusRadius, 30, 30)
export const venusOrbitGeometry = new THREE.CylinderGeometry(
    PlanetData.venusDistance - 0.1,
    PlanetData.venusDistance + 0.1,
    0.1,
    300,
    1,
    true
)

export const earthGeometry = new THREE.SphereGeometry(PlanetData.earthRadius, 30, 30)
export const earthOrbitGeometry = new THREE.CylinderGeometry(
    PlanetData.earthDistance - 0.1,
    PlanetData.earthDistance + 0.1,
    0.1,
    300,
    1,
    true
)

export const marsGeometry = new THREE.SphereGeometry(PlanetData.marsRadius, 30, 30)
export const marsOrbitGeometry = new THREE.CylinderGeometry(
    PlanetData.marsDistance - 0.1,
    PlanetData.marsDistance + 0.1,
    0.1,
    300,
    1,
    true
)

export const jupiterGeometry = new THREE.SphereGeometry(PlanetData.jupiterRadius, 30, 30)

export const jupiterOrbitGeometry = new THREE.CylinderGeometry(
    PlanetData.jupiterDistance - 0.7,
    PlanetData.jupiterDistance + 0.7,
    0.7,
    300,
    1,
    true
)

export const saturnGeometry = new THREE.SphereGeometry(PlanetData.saturnRadius, 30, 30)
export const saturnOrbitGeometry = new THREE.CylinderGeometry(
    PlanetData.saturnDistance - 1,
    PlanetData.saturnDistance + 1,
    1,
    300000,
    1,
    true
)
export const saturnRingsGeometry = new THREE.CylinderGeometry(
    PlanetData.saturnRadius * 2 - 30,
    PlanetData.saturnRadius * 2 + 10,
    1,
    64,
    1,
    true
)

export const uranusGeometry = new THREE.SphereGeometry(PlanetData.uranusRadius, 30, 30)
export const uranusOrbitGeometry = new THREE.CylinderGeometry(
    PlanetData.uranusDistance - 1,
    PlanetData.uranusDistance + 1,
    1,
    300000,
    1,
    true
)

export const neptuneGeometry = new THREE.SphereGeometry(PlanetData.neptuneRadius, 30, 30)
export const neptuneOrbitGeometry = new THREE.CylinderGeometry(
    PlanetData.neptuneDistance - 1,
    PlanetData.neptuneDistance + 1,
    1,
    300000,
    1,
    true
)
export const moonGeometry = new THREE.SphereGeometry(PlanetData.moonRadius, 30, 30)
