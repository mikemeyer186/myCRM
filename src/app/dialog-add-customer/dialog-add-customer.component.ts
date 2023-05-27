import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-customer',
  templateUrl: './dialog-add-customer.component.html',
  styleUrls: ['./dialog-add-customer.component.scss'],
})
export class DialogAddCustomerComponent {
  constructor(
    public customerService: CustomerService,
    public dialogRef: MatDialogRef<DialogAddCustomerComponent>
  ) {}
}
