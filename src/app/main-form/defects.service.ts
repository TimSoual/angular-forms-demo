import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({providedIn: 'root'})
export class DefectsService {

  constructor(private http: HttpClient) { }

  postDefect(body) {
    // We call our jsonstub api (https://jsonstub.com)
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('JsonStub-User-Key', 'b6c3e269-aa49-4658-bf8a-16364fa586e8')
    .set('JsonStub-Project-Key', '3024d05b-c4da-4bda-86e7-d4ecdc89de68');


    return this.http.post <{message: string}>(
      'http://jsonstub.com/defects',
      body,
      {headers});
  }

}
