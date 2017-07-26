import { Injectable } from '@angular/core';
import { Person } from "./person";
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";
@Injectable()
export class GetDataService {

  public nodes = [];
  public edges = [];
  private data: any;

  private DIR = "assets/images/";
  private id = 0;

  private persons: Array<Person> = new Array();

  constructor(private http: Http) {
    let person: Person = new Person(this.id, "ayoub");
    this.id++;
    let person2: Person = new Person(this.id, "bousgid");
    person.relations.push(person2);
    this.persons.push(person);
    this.persons.push(person2);
    this.constructData();
  }

  constructData(): Observable<any> {
    let url = "https://cctn-dev1.crm.em3.oraclecloud.com/crmCommonApi/resources/11.12.1.0/contacts";
    let headers: Headers = new Headers();
    headers.append("Authorization", "Basic Ym91Z3NpZC5heW91YkBhY2NlbnR1cmUuY29tOktoYWJAMTk2MA==");
    headers.append("Content-Type", "application/x-www-form-urlencoded");
     let options       = new RequestOptions({ headers: headers });
    return this.http.get(url,options).map(result => result.json());
    /*this.nodes = [];
    this.edges = [];
    for (let person of this.persons) {
      this.nodes.push({ id: person.id, label: person.name, physics: false, image: this.DIR + person.id + '.jpg', shape: 'circularImage' });
      for (let relation of person.relations) {
        this.edges.push({ from: person.id, to: relation.id, label: 'type' + person.id, arrows: 'to', color :this.getRandomColor() });
      }
    }
    this.data = {
      nodes: this.nodes,
      edges: this.edges
    };*/
  }

  loadData() {
    console.log(this.data);
    this.constructData();
    return this.data;
  }
  getPersons() {
    return this.persons;
  }

  addPerson(name: string) {
    this.id++;
    this.persons.push(new Person(this.id, name));
  }

  addRelation(from, to) {
    let fromPerson: Person = this.persons.filter(p => p.id == from)[0];
    let toPerson: Person = this.persons.filter(p => p.id == to)[0];
    fromPerson.addRelation(toPerson);
  }
  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
