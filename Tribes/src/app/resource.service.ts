import { ROOT_URL } from './constants';
import { ResourceResponse } from './resourceResponse';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(private http: HttpClient) { }

  getDataFromBackend(): Observable<ResourceResponse> {
    return this.http.get<ResourceResponse>(ROOT_URL + '/kingdom/resources');
  }
}
