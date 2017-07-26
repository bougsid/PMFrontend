import { Component, OnInit } from '@angular/core';
import { PowerMap } from "../power-map/PowerMap";
import { PowerMapService } from "../power-map/power-map.service";

@Component({
  selector: 'app-power-maps',
  templateUrl: './power-maps.component.html',
  styleUrls: ['./power-maps.component.css']
})
export class PowerMapsComponent implements OnInit {

  private powerMaps: Array<PowerMap>;
  constructor(private powerMapService : PowerMapService) { }

  ngOnInit() {
    this.powerMapService.getAll().subscribe(result => {
      this.powerMaps = result;
      console.log("PowerMaps List");
      console.log(this.powerMaps);
    });
  }

}
