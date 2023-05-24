import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dialog-add-customer',
  templateUrl: './dialog-add-customer.component.html',
  styleUrls: ['./dialog-add-customer.component.scss'],
})
export class DialogAddCustomerComponent {
  constructor(public userService: UserService) {}
}
