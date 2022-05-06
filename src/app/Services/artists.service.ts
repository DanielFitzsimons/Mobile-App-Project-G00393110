import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor(private httpClient:HttpClient) { }

  getArtistsData():Observable<any>{
    return this.httpClient.get('https://www.jsonblob.com/api/jsonblob/972139882181050368');

  }
}
