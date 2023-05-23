import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent {
  constructor(public userService: UserService) {}
}
