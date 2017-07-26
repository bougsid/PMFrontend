import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import { Opportunity } from "./opportunity";

@Injectable()
export class OpportunityService {

  constructor(private http: Http) { }
  dev: boolean = true;
  getAllOpportunities(): Observable<Opportunity[]> {
    //let url = this.getUrl() + "/powermap/osc/contacts";
    let url = "./osc/opportunities";
    if(this.dev)
    url = "http://localhost:8080/powermap-poc/osc/opportunities";
    let headers: Headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    return this.http.get(url, options).map(result => result.json());
  }

}
