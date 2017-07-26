import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'

import { Contact } from "./Contact";
import { Resource } from "./Resource";
@Injectable()
export class ContactsService {

  constructor(private http: Http) { }
  dev : boolean = true;
  getContact(partyNumber): Observable<Contact> {
    let url = "./osc/contacts/" + partyNumber;
    if(this.dev)
    url = "http://localhost:8080/powermap-poc/osc/contacts/" + partyNumber;
    let headers: Headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    return this.http.get(url, options).map(result => result.json());
  }
  getResource(partyNumber): Observable<Resource> {
    let url = "./osc/resources/" + partyNumber;
    if(this.dev)
    url = "http://localhost:8080/powermap-poc/osc/resources/" + partyNumber;
    let headers: Headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    return this.http.get(url, options).map(result => result.json());
  }
  getAllContacts(optyNumber): Observable<Contact[]> {
    let url = "./osc/opportunity/contacts/" + optyNumber;
    if(this.dev)
    url = "http://localhost:8080/powermap-poc/osc/opportunity/contacts/" + optyNumber;
    let headers: Headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    return this.http.get(url, options).map(result => result.json());
  }

  getAllResources(optyNumber): Observable<Resource[]> {
    //let url = this.getUrl() + "/powermap/osc/contacts";
    let url = "./osc/opportunity/resources/" + optyNumber;
    if(this.dev)
    url = "http://localhost:8080/powermap-poc/osc/opportunity/resources/" + optyNumber;
    let headers: Headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    return this.http.get(url, options).map(result => result.json());
  }
  /*getUrl() {
    let pathArray = document.location.href.split('/');
    let protocol = pathArray[0];
    let host = pathArray[2];
    let url = protocol + '//' + host;
    return url;
  }*/
}
