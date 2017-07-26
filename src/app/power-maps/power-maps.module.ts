import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerMapsComponent } from "./power-maps.component";
import { PowerMapService } from "../power-map/power-map.service";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [PowerMapsComponent],
  exports: [PowerMapsComponent],
  providers: [PowerMapService]
})
export class PowerMapsModule { }
