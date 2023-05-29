import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddCustomerComponent } from './dialog-add-customer/dialog-add-customer.component';
import { Customer } from 'src/models/customer.class';
import {
  Firestore,
  collection,
  addDoc,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
} from '@angular/fire/firestore';
import { Subject } from 'rxjs';
import { DialogDelCustomerComponent } from './dialog-del-customer/dialog-del-customer.component';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  customerList: any[] = [];
  newCustomer = new Customer();
  newCustomerProgess: boolean = false;
  customersLoaded: boolean = false;
  customerChangeData: any = new Subject();
  customerID: string = '';
  customerDetail = new Customer();
  birthDate!: Date;
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

  constructor(
    public addDialog: MatDialog,
    public deleteDialog: MatDialog,
    private firestore: Firestore
  ) {}

  /**
   * Open the add customer dialog
   */
  addCustomerDialogOpen() {
    this.newCustomer = new Customer();
    const addDialog = this.addDialog.open(DialogAddCustomerComponent, {
      maxWidth: '100vw',
    });
  }

  /**
   * Open the delete customer dialog
   */
  deleteCustomerDialogOpen() {
    const deleteDialog = this.deleteDialog.open(DialogDelCustomerComponent, {
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
    this.customerChangeData.next(this.customerList.length);
    this.newCustomer.birthDate = this.birthDate.toLocaleDateString();
    this.createNewCustomerFirestore();
    this.loadCustomerFromFirestore();
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

  /**
   * Animation for the progress spinner
   */
  newCustomerProgressAnimation() {
    setTimeout(() => {
      this.newCustomerProgess = false;
      this.addCustomerDialogClose();
    }, 1000);
  }

  /**
   * Load all customers from Firestore
   */
  async loadCustomerFromFirestore() {
    const querySnapshot = await getDocs(
      collection(this.firestore, 'customers')
    );
    this.customerList = querySnapshot.docs.map((customer) => {
      const data = customer.data() as Customer;
      const id = customer.id;
      return { id, ...data };
    });
    console.log(this.customerList);
  }

  /**
   * Update customer in Firestore
   */
  async updateCustomerInFirestore() {
    const docRef = doc(this.firestore, `customers/${this.customerID}`);
    await setDoc(docRef, JSON.parse(JSON.stringify(this.customerDetail)));
  }

  /**
   * Deleting customer from Firestore
   */
  deleteCustomerFromFirestore() {
    const docRef = doc(this.firestore, `customers/${this.customerID}`);
    deleteDoc(docRef).then(() => {
      this.loadCustomerFromFirestore();
      this.customerChangeData.next(this.customerList.length);
    });
  }
}
