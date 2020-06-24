import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Configuration } from './configuration';
import { map, catchError } from "rxjs/operators"; 
import { Observable } from 'rxjs';
import { throwError } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {  }

  getVideo(limit){
    let req = { "limit" : limit, "languages": "id"}
    return this.getDataHeader(Configuration.BASE_URL + Configuration.GET_VIDEOS, req)
  }

  getVideoUrl(limit){
    let req = { "limit" : limit,"fields": "embed_url"}
    return this.getDataHeader(Configuration.BASE_URL + Configuration.GET_VIDEOS, req)
  }

  createHeaderAuth(){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return headers;
  }

  getDataHeader(url, params) {
    return this.httpClient.get(url,{params:params, headers: this.createHeaderAuth() })
      .pipe(
        map((response: Response) => response),
        catchError(this.handleError)
      ) 
  }

  private handleError(error) {
		console.log(error)
    return throwError(error);
  }
  
}
