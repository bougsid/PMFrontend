import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ContactsService } from "./contacts.service";
import { Contact } from "./Contact";
import { DragulaService } from "ng2-dragula";
import { Resource } from "./Resource";
@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  @Input()
  private optyNumber ;
  private contacts: Contact[];
  private resources: Resource[];
  contactFilter: any = { contactName: '' };
  resourceFilter: any = { partyName: '' };
  @Output() onAddContactToMap = new EventEmitter<Contact>();
  @Output() onAddResourceToMap = new EventEmitter<Resource>();
  constructor(private contactsService: ContactsService, private dragulaService: DragulaService) {
  }
  ngOnInit(): void {
    this.contactsService.getAllContacts(this.optyNumber).subscribe(result => {
      this.contacts = result;
    })
    this.contactsService.getAllResources(this.optyNumber).subscribe(result => {
      this.resources = result;
    })
  }

  addContactToMap(event, contact: Contact) {
    this.onAddContactToMap.emit(contact);
  }
  addResourceToMap(event, resource: Resource) {
    this.onAddResourceToMap.emit(resource);
  }
}
