import { ResourceResponse } from './resourceResponse';
import { Resource } from './resource';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ROOT_URL } from './constants';

@Injectable({
  providedIn: 'root'
})

export class ResourceService {

  rootUrl = ROOT_URL;

  constructor(private http: HttpClient) { }

  getDataFromBackend(): Observable<ResourceResponse> {
    return this.http.get<ResourceResponse>(this.rootUrl + '/kingdom/resources');
  }
}
