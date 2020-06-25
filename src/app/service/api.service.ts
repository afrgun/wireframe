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
    return this.getDataHeader(Configuration.BASE_URL_VIDEO + Configuration.GET_VIDEOS, req)
  }

  getVideoUrl(limit){
    let req = { "limit" : limit,"fields": "embed_url"}
    return this.getDataHeader(Configuration.BASE_URL_VIDEO + Configuration.GET_VIDEOS, req)
  }

  getArticles(){
    let req ={ "country": "id","apiKey": "b908cfab98cd4bfdafc093e07adda764","pageSize":6}
    return this.getDataHeader(Configuration.BASE_URL_ARTICLE + Configuration.GET_ARTICLES, req)
  }


  getDataHeader(url, params) {
    return this.httpClient.get(url,{params:params, headers: this.createHeaderAuth() })
      .pipe(
        map((response: Response) => response),
        catchError(this.handleError)
      ) 
  }

  createHeaderAuth(){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return headers;
  }

  private handleError(error) {
		console.log(error)
    return throwError(error);
  }
  
}
