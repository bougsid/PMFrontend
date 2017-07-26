import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerMapComponent } from "./power-map.component";
import { ContactsModule } from "../contacts/contacts.module";
import { FormsModule } from "@angular/forms";
import { DragulaModule } from 'ng2-dragula'
import { PowerMapService } from "./power-map.service";
import { ContactsService } from "../contacts/contacts.service";

@NgModule({
  imports: [
    CommonModule,
    ContactsModule,
    FormsModule,
    DragulaModule
  ],
  declarations: [PowerMapComponent],
  exports: [PowerMapComponent],
  providers: [PowerMapService,ContactsService]
})
export class PowerMapModule { }
