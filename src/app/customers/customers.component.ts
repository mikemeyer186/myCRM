import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from '../customer.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit, OnDestroy {
  @ViewChild(MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource();
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'street',
    'postalCode',
    'city',
    'state',
    'country',
    'email',
    'birthDate',
  ];
  displayedColumnsTitles: string[] = [
    'First Name',
    'Last Name',
    'Street',
    'Postal Code',
    'City',
    'State',
    'Country',
    'Email',
    'Birth Date',
  ];

  constructor(public customerService: CustomerService) {
    setTimeout(() => {
      this.checkIfCustomersAreLoaded();
      this.dataSource.sort = this.sort;
    }, 3000);
  }

  checkIfCustomersAreLoaded() {
    if (this.customerService.customersLoaded) {
      this.dataSource = new MatTableDataSource(
        this.customerService.customerList
      );
    }
  }

  ngOnInit(): void {
    this.customerService.loadCustomerFromFirestore();
  }

  ngOnDestroy(): void {
    this.customerService.customersLoaded = false;
  }
}
