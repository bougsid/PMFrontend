import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GetDataService } from "./get-data.service";
import { ComboBoxModule } from 'ng2-combobox';
import { ContactsComponent } from './contacts/contacts.component';
import { PowerMapComponent } from './power-map/power-map.component';
import { PowerMapModule } from "./power-map/power-map.module";
import { ContactsModule } from "./contacts/contacts.module";

import { DragulaModule } from 'ng2-dragula'
import { RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { HomeModule } from "./home/home.module";
import { PowerMapsComponent } from './power-maps/power-maps.component';
import { OpportunityComponent } from './opportunity/opportunity.component';
import { ReportComponent } from './report/report.component';
const routes = [
  { path: '', redirectTo: 'osc/home/opportunities', pathMatch: 'full' },
  {
    path: 'osc/home',
    component: HomeComponent,
    children: [
      { path: 'powermap', component: PowerMapComponent, name: "NewPowerMap" },
      { path: 'powermap/:id', component: PowerMapComponent, name: "ModifPowerMap" },
      { path: 'powermaps', component: PowerMapsComponent },
      { path: 'opportunities', component: OpportunityComponent },

    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ComboBoxModule,
    PowerMapModule,
    ContactsModule,
    DragulaModule,
    HomeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
