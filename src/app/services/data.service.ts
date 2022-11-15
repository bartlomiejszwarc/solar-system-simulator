import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private http: HttpClient) {}

    apiUrl = 'https://api.le-systeme-solaire.net/rest/bodies/'

    getPlanetData(id: string): Observable<any> {
        return this.http.get(this.apiUrl + `/${id}`)
    }
}
