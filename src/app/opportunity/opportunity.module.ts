import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpportunityComponent } from "./opportunity.component";
import { OpportunityService } from "./opportunity.service";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [OpportunityComponent],
  exports:[OpportunityComponent],
  providers : [OpportunityService]
})
export class OpportunityModule { }
