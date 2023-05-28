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
  customerDetail = new Customer();
  customerID: string = '';
  constructor(
    private route: ActivatedRoute,
    public customerService: CustomerService
  ) {
    this.getCustomerIdFromRoute();
    this.findCustomerById();
  }

  /**
   * getting customer ID from url params
   */
  getCustomerIdFromRoute() {
    this.route.params.subscribe((params: any) => {
      this.customerID = params['id'];
    });
  }

  // find customer by id in customerList
  findCustomerById() {
    this.customerDetail = this.customerService.customerList.find(
      (customer) => customer.id == this.customerID
    );
    console.log(this.customerDetail);
  }
}
