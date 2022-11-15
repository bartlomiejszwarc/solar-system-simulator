import * as PlanetTexture from 'src/app/helpers/PlanetTexture'
import * as THREE from 'three'

export const sunMaterial = new THREE.MeshBasicMaterial({
    map: PlanetTexture.sunTextureMap
})

export const mercuryMaterial = new THREE.MeshStandardMaterial({
    map: PlanetTexture.mercuryTextureMap
})
export const mercuryOrbitMaterial = new THREE.MeshBasicMaterial({
    color: '#a1a1aa',
    transparent: true,
    opacity: 0.15,
    depthTest: true,
    side: THREE.DoubleSide
})
export const venusMaterial = new THREE.MeshStandardMaterial({
    map: PlanetTexture.venusTextureMap
})
export const venusOrbitMaterial = new THREE.MeshBasicMaterial({
    color: '#fde68a',
    transparent: true,
    opacity: 0.15,
    depthTest: true,
    side: THREE.DoubleSide
})

export const earthMaterial = new THREE.MeshStandardMaterial({
    map: PlanetTexture.earthTextureMap
})
export const earthOrbitMaterial = new THREE.MeshBasicMaterial({
    color: '#bae6fd',
    transparent: true,
    opacity: 0.15,
    depthTest: true,
    side: THREE.DoubleSide
})

export const moonMaterial = new THREE.MeshStandardMaterial({
    map: PlanetTexture.moonTextureMap
})

export const marsMaterial = new THREE.MeshStandardMaterial({
    map: PlanetTexture.marsTextureMap
})
export const marsOrbitMaterial = new THREE.MeshBasicMaterial({
    color: '#ea580c',
    transparent: true,
    opacity: 0.15,
    depthTest: true,
    side: THREE.DoubleSide
})

export const jupiterMaterial = new THREE.MeshStandardMaterial({
    map: PlanetTexture.jupiterTextureMap
})
export const jupiterOrbitMaterial = new THREE.MeshBasicMaterial({
    color: '#92400e',
    transparent: true,
    opacity: 0.2,
    depthTest: true,
    side: THREE.DoubleSide
})

export const saturnMaterial = new THREE.MeshStandardMaterial({
    map: PlanetTexture.saturnTextureMap
})
export const saturnOrbitMaterial = new THREE.MeshBasicMaterial({
    color: '#fef3c7',
    transparent: true,
    opacity: 0.1,
    depthTest: true,
    side: THREE.DoubleSide
})
export const saturnRingsMaterial = new THREE.MeshStandardMaterial({
    map: PlanetTexture.saturnRingsTextureMap,
    side: THREE.DoubleSide,
    transparent: true,
    depthTest: true
})

export const uranusMaterial = new THREE.MeshStandardMaterial({
    map: PlanetTexture.uranusTextureMap
})

export const uranusOrbitMaterial = new THREE.MeshBasicMaterial({
    color: '#a5f3fc',
    transparent: true,
    opacity: 0.35,
    depthTest: true,
    side: THREE.DoubleSide
})

export const neptuneMaterial = new THREE.MeshStandardMaterial({
    map: PlanetTexture.neptuneTextureMap
})
export const neptuneOrbitMaterial = new THREE.MeshBasicMaterial({
    color: '#7dd3fc',
    transparent: true,
    opacity: 0.35,
    depthTest: true,
    side: THREE.DoubleSide
})
