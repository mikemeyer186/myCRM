import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from '../customer.service';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit, OnDestroy {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

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
    this.customerService.newCustomerAdded.subscribe(() => {
      this.refreshCustomerTable();
      this.table.renderRows();
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.customerService.customersLoaded = true;
      this.checkIfCustomersAreLoaded();
    }, 500);
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, 550);
  }

  ngOnDestroy(): void {
    this.customerService.customersLoaded = false;
  }

  /**
   * Check if customers are loaded from Firestore and set the dataSource
   */
  checkIfCustomersAreLoaded() {
    if (this.customerService.customersLoaded) {
      this.dataSource = new MatTableDataSource(
        this.customerService.customerList
      );
    }
  }

  /**
   * Refresh the customer table and set the paginator and sort
   */
  refreshCustomerTable() {
    setTimeout(() => {
      this.checkIfCustomersAreLoaded();
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, 3000);
  }
}
