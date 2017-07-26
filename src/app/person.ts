export class Person{
    id:number;
    name:string;
    relations : Array<Person> = new Array();

    constructor(id:number,name:string){
        this.id = id;
        this.name = name;
    }

    addRelation(person : Person){
        this.relations.push(person);
    }
}