import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import { PowerMap } from "./PowerMap";

@Injectable()
export class PowerMapService {

  constructor(private http: Http) { }
  dev: boolean = true;
  private powerMapApiURL = "./osc/powermaps";
  getAll(): Observable<PowerMap[]> {
    if (this.dev)
      this.powerMapApiURL = "http://localhost:8080/powermap-poc/osc/powermaps";
    let headers: Headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.powerMapApiURL, options).map(result => result.json());
  }
  getOne(id: number) {
    if (this.dev)
      this.powerMapApiURL = "http://localhost:8080/powermap-poc/osc/powermaps";
    return this.http.get(this.powerMapApiURL + "/" + id).map(result => result.json());
  }
  save(powerMap: PowerMap): Observable<PowerMap> {
    console.log(JSON.stringify(powerMap));
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.powerMapApiURL, JSON.stringify(powerMap), options)
      .map(res => {
        return res.json();
      })
    // .catch(this.handleError);
  }
  update(powerMap: PowerMap): Observable<PowerMap[]> {
    console.log(JSON.stringify(powerMap));
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.powerMapApiURL, JSON.stringify(powerMap), options)
      .map(res => {
        return res.json();
      })
    // .catch(this.handleError);
  }


}
