import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanetasService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Promise<any> {
    return this.httpClient.get('https://swapi.co/api/planets/?format=json').toPromise();
  }

}
