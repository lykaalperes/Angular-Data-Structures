import { Component } from '@angular/core';

interface Contact {
  name: string;
  number: string;
  email: string;   // New field for email
  address: string; // New field for address
}

@Component({
  selector: 'app-phone-contact-list',
  templateUrl: './phone-contact-list.component.html',
  styleUrls: ['./phone-contact-list.component.css'],
})
export class PhoneContactListComponent {
  contacts: Contact[] = [
    { name: 'Lyka Mae', number: '123-456-7890', email: 'lykamae@example.com', address: '123 Elm St.' },
    { name: 'Mary Jane', number: '987-654-3210', email: 'maryjane@example.com', address: '456 Oak St.' },
    { name: 'Paul', number: '555-123-4567', email: 'pingpong@example.com', address: '789 Pine St.' },
    { name: 'Mark', number: '444-777-8888', email: 'budoy@example.com', address: '101 Maple St.' },
  ];

  newContact: Contact = { name: '', number: '', email: '', address: '' };

  addContact() {
    if (this.newContact.name && this.newContact.number) {
      this.contacts.push({ ...this.newContact });
      this.newContact = { name: '', number: '', email: '', address: '' }; // Clear the input fields
    }
  }

  removeContact(index: number) {
    this.contacts.splice(index, 1);
  }
}
