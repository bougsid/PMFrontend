import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home.component";
import { RouterModule } from "@angular/router";
import { PowerMapsModule } from "../power-maps/power-maps.module";
import { OpportunityModule } from "../opportunity/opportunity.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PowerMapsModule,
    OpportunityModule
  ],
  declarations: [HomeComponent],
  exports : [HomeComponent]
})
export class HomeModule { }
