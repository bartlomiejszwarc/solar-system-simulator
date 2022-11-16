import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { Observable } from 'rxjs'
@Injectable({
    providedIn: 'root'
})
export class SharedService {
    constructor() {}

    currentLang!: string
    planetName: BehaviorSubject<string> = new BehaviorSubject<any>(undefined)
    getLanguage() {
        return this.currentLang
    }

    setLanguage(language: string) {
        this.currentLang = language
    }

    getPlanetName(): Observable<any> {
        return this.planetName.asObservable()
    }

    setPlanetName(planet: any) {
        this.planetName.next(planet)
        this.getPlanetName()
    }
}
