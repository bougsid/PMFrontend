import { Component, OnInit } from '@angular/core';
import { Opportunity } from "./opportunity";
import { OpportunityService } from "./opportunity.service";

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.css']
})
export class OpportunityComponent implements OnInit {

private opportunities : Opportunity[];
  constructor(private opportunityService : OpportunityService) { }

  ngOnInit() {

    this.opportunityService.getAllOpportunities().subscribe(result => {
      console.log("Opportunities")
      console.log(this.opportunities)
      this.opportunities = result;
    })
  }

}
