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
  newCustomerProgess: boolean = false;
  newCustomerCountry: string[] = [
    'Deutschland',
    'Österreich',
    'Schweiz',
    'USA',
    'China',
    'Frankreich',
    'Italien',
    'Spanien',
    'Portugal',
    'Niederlande',
    'Belgien',
    'Luxemburg',
    'Polen',
    'Tschechien',
    'Griechenland',
    'Türkei',
    'Norwegen',
    'Schweden',
    'Großbritannien',
    'Irland',
    'Kanada',
    'Brasilien',
    'Argentinien',
    'Mexiko',
    'Japan',
    'Indien',
    'Australien',
    'Neuseeland',
    'Südafrika',
    'Ägypten',
    'Tunesien',
    'Marokko',
  ];
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
    this.newCustomerProgess = true;
    this.newCustomer.birthDate = this.birthDate.toLocaleDateString();
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
        this.newCustomerProgressAnimation();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  newCustomerProgressAnimation() {
    setTimeout(() => {
      this.newCustomerProgess = false;
      this.addCustomerDialogClose();
    }, 1000);
  }
}
