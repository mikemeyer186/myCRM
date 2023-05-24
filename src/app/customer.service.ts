import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddCustomerComponent } from './dialog-add-customer/dialog-add-customer.component';
import { Customer } from 'src/models/customer.class';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  newCustomer = new Customer();
  birthDate!: Date;

  constructor(public addDialog: MatDialog) {}

  addCustomerDialogOpen() {
    const addDialog = this.addDialog.open(DialogAddCustomerComponent, {
      maxWidth: '100vw',
    });
  }

  addCustomerDialogClose() {
    this.addDialog.closeAll();
  }

  saveNewCustomer() {
    this.newCustomer.birthDate = this.birthDate.getTime();
    this.addCustomerDialogClose();
    console.log(this.newCustomer);
  }
}
