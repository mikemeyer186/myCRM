import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/models/customer.class';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss'],
})
export class CustomerDetailComponent {
  customerName: string = '';
  customerEdit: boolean = false;
  constructor(
    private route: ActivatedRoute,
    public customerService: CustomerService
  ) {
    this.getCustomerIdFromRoute();
    this.findCustomerById();
    this.setCustomerName();
  }

  setCustomerName() {
    this.customerName =
      this.customerService.customerDetail.firstName +
      ' ' +
      this.customerService.customerDetail.lastName;
  }

  /**
   * getting customer ID from url params
   */
  getCustomerIdFromRoute() {
    this.route.params.subscribe((params: any) => {
      this.customerService.customerID = params['id'];
    });
  }

  /**
   * finding customer by ID in customer list
   */
  findCustomerById() {
    this.customerService.customerDetail =
      this.customerService.customerList.find(
        (customer) => customer.id == this.customerService.customerID
      );
    console.log(this.customerService.customerDetail);
  }

  /**
   * toggling customer edit mode in detail view
   */
  customerEditToggle() {
    this.customerEdit = !this.customerEdit;
  }

  /**
   * saving customer edit in firestore
   */
  saveCustomerEdit() {
    this.customerService.updateCustomerInFirestore();
    this.customerEditToggle();
    this.setCustomerName();
  }
}
