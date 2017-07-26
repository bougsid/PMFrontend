import { Component, OnInit } from '@angular/core';
import { PowerMap } from "./PowerMap";
import { PowerMapService } from "./power-map.service";
import { ActivatedRoute } from "@angular/router";
import { Resource } from "../contacts/Resource";
import { ContactsService } from "../contacts/contacts.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { Contact } from "../contacts/Contact";

declare var vis: any;
declare var $;
declare var test
@Component({
  selector: 'power-map',
  templateUrl: './power-map.component.html',
  styleUrls: ['./power-map.component.css']
})
export class PowerMapComponent implements OnInit {

  private optyNumber;
  //private update = false;
  private nodes;
  private edges;
  private data;
  private options;
  private network;
  private container;
  private DIR = "assets/images/";
  //private mapName = "";
  //private mapId;
  private map;
  private contact;
  private process: boolean = false;
  //  private mapDID;

  private relation = "";
  private relations = [
    { value: '#FF5733', display: 'CDA' },
    { value: '#7FA400', display: 'CDV' },
    { value: '#9000A4', display: 'CIC' },
    { value: '#A40007', display: 'DAS' },
    { value: '#003AFF', display: 'DVS' }
  ];
  constructor(private powerMapService: PowerMapService,
    private contactsService: ContactsService,
    private activatedRoute: ActivatedRoute) {
  }

  startProcess() {
    this.process = true;
  }

  endProcess() {
    this.process = false;
  }
  ngOnInit() {
    this.startProcess();
    this.optyNumber = this.activatedRoute.snapshot.params['id'];
    if (this.optyNumber) {
      this.powerMapService.getOne(this.optyNumber).subscribe(result => {
        console.log(result)
        this.map = result;
        //this.mapName = result.name;
        this.setNodesAndEdges(result);
        this.constructNetwork();
        this.endProcess();
      });
    } else {
      this.nodes = new vis.DataSet();
      this.edges = new vis.DataSet();
      this.constructNetwork();
      this.endProcess();
    }
  }

  setNodesAndEdges(map) {
    let nodes = [];
    let edges = [];
    for (let node of map.nodes) {
      nodes.push({
        id: node.id,
        label: node.label,
        title: node.title,
        color: node.type == "CONTACT" ? "#ffee00" : "#FFFFFF",
        image: node.type == "EMPLOYE" ? "assets/images/1.jpg": "assets/images/"+node.function+".jpg" ,
        shape: "circularImage"
      });
    }
    for (let edge of map.relations) {
      edges.push({ from: edge.from, to: edge.to })
    }
    this.nodes = new vis.DataSet(nodes);
    this.edges = new vis.DataSet(edges);

  }
  constructNetwork() {
    this.data = {
      nodes: this.nodes,
      edges: this.edges
    };
    this.container = document.getElementById('visualization');

    this.options = {
      nodes: {
        borderWidthSelected: 7,
        physics: false
      },
      edges: {
        arrows: {
          to: {
            enabled: true
          }
        },
        smooth: {
          forceDirection: "none"
        }
      },
      manipulation: {
        enabled: false,
      }
    };

    this.network = new vis.Network(this.container, this.data, this.options);


    this.network.on("doubleClick", (params) => {
      this.startProcess();
      let node = this.map.nodes.filter(item => item.id === params.nodes[0]);
      if (node[0].type == "EMPLOYE")
        this.contactsService.getResource(params.nodes[0]).subscribe(result => {
          console.log(result);
          this.contact = result;
          this.endProcess();
        })
      else if (node[0].type == "CONTACT")
        this.contactsService.getContact(params.nodes[0]).subscribe(result => {
          console.log(result);
          this.contact = result;
          this.endProcess();
        })
    });
  }

  /*deleteSelected() {
    if (confirm("Are you sure to delete ")) {
      this.network.deleteSelected();
    }
  }
  addEdge() {
    this.network.addEdgeMode();
  }
  addContact(contact) {
    console.log("Add Contact")
    console.log(contact)
    console.log(this.nodes)
    if (this.nodes.get(contact.partyId) == null)
      this.nodes.add({
        id: contact.partyId,
        label: contact.contactName,
        title: contact.formattedPhoneNumber,
        image: this.DIR + '1.jpg',
        shape: 'circularImage'
      });
    else
      window.alert(contact.contactName + " Already Exist");
  }
  addResource(resource: Resource) {
    console.log(resource)
    console.log(this.nodes)
    if (this.nodes.get(resource.resourceId) == null)
      this.nodes.add({
        id: resource.resourceId,
        label: resource.partyName,
        title: resource.formattedPhoneNumber,
        image: this.DIR + '1.jpg',
        shape: 'circularImage'
      });
    else
      window.alert(resource.partyName + " Already Exist");
  }
  addEdgeCallback(data, callback) {
    $('.ui.modal').modal({
      onApprove: function (e) {
        data.label = $('#relation').val();
        callback(data)
        $('#relation').val("");
      },
    }).modal('show');
  }
  addEdgeCallback(data, callback) {
    if(!data.label)data.label = this.relation;
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    let color = $("input[name='relation']:checked").val();
    data.label = $("input[name='relation']:checked").next().attr('id')
    data.color = color;
    callback(data)
}
  save() {
    $('#map-name').modal({
    }).modal('show');
  }
  persist() {
    let powerMap = new PowerMap();
    powerMap.contacts = [];
    powerMap.relations = [];
    powerMap.id = this.optyNumber;
    powerMap.mapName = this.mapName;
    console.log(this.nodes._data)
    for (let node in this.nodes._data) {
      powerMap.contacts.push(this.nodes._data[node])
    }
    for (let edge in this.edges._data) {
      powerMap.relations.push(this.edges._data[edge])
    }
    console.log(powerMap)
    if (this.update) {
      console.log("update")
      powerMap.did = this.mapId;
      this.powerMapService.update(powerMap).subscribe(result => {
        console.log("Result for update pwoermap");
        console.log(result)
      });
    } else {
      this.powerMapService.save(powerMap).subscribe(result => {
        this.mapId = result.did;
        this.update = true;
        console.log("Result for save pwoermap");
        console.log(result)
      });
    }
  }*/
  export() {
    let blob = new Blob(['\ufeff' + JSON.stringify(this.data, null, '\t')], { type: 'application/json;charset=utf-8;' });
    let dwldLink = document.createElement("a");
    let url = URL.createObjectURL(blob);
    let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
    if (isSafariBrowser)   //if Safari open in new window to save file with random filename.
      dwldLink.setAttribute("target", "_blank");

    dwldLink.setAttribute("href", url);
    dwldLink.setAttribute("download", "powermap" + ".json");
    dwldLink.style.visibility = "hidden";
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
  }


}
