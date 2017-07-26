import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsService } from "./contacts.service";
import { ContactsComponent } from "./contacts.component";
import { DragulaModule, DragulaService } from 'ng2-dragula'
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
@NgModule({
  imports: [
    CommonModule,
    DragulaModule,
    BrowserModule,
    FormsModule,
    Ng2FilterPipeModule
  ],
  declarations: [ContactsComponent],
  providers: [ContactsService,DragulaService],
  exports: [ContactsComponent]
})
export class ContactsModule { }
