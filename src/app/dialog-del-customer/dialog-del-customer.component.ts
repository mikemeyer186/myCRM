import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-dialog-del-customer',
  templateUrl: './dialog-del-customer.component.html',
  styleUrls: ['./dialog-del-customer.component.scss'],
})
export class DialogDelCustomerComponent {
  constructor(public customerService: CustomerService) {}
}
