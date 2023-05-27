import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  constructor(
    public globalService: GlobalService,
    public customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.customerService.loadCustomerFromFirestore();
  }
}
