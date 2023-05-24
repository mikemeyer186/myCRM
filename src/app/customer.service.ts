import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddCustomerComponent } from './dialog-add-customer/dialog-add-customer.component';
import { Customer } from 'src/models/customer.class';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  newCustomer = new Customer();
  birthDate!: Date;

  constructor(public addDialog: MatDialog, private firestore: Firestore) {}

  /**
   * Open the add customer dialog
   */
  addCustomerDialogOpen() {
    const addDialog = this.addDialog.open(DialogAddCustomerComponent, {
      maxWidth: '100vw',
    });
  }

  /**
   * Close the add customer dialog
   */
  addCustomerDialogClose() {
    this.addDialog.closeAll();
  }

  /**
   * Save new customer from dialog
   */
  saveNewCustomer() {
    this.newCustomer.birthDate = this.birthDate.getTime();
    this.addCustomerDialogClose();
    this.createNewCustomerFirestore();
  }

  /**
   * Create a new customer in Firestore
   */
  async createNewCustomerFirestore() {
    await addDoc(
      collection(this.firestore, 'customers'),
      this.newCustomer.toJSON()
    )
      .then((res) => {
        console.log('Upload ok', res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
