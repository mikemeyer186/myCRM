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
    'city',
    'country',
    'email',
  ];
  displayedColumnsTitles: string[] = [
    'First Name',
    'Last Name',
    'City',
    'Country',
    'Email',
  ];

  constructor(public customerService: CustomerService) {
    this.customerService.customerChangeData.subscribe(() => {
      this.refreshCustomerTable();
    });
  }

  ngOnInit(): void {
    this.startCustomerTable();
  }

  ngOnDestroy(): void {
    this.customerService.customersLoaded = false;
  }

  /**
   * Start the customer table and set the paginator and sort
   */
  startCustomerTable() {
    setTimeout(() => {
      this.customerService.customersLoaded = true;
      this.checkIfCustomersAreLoaded();
    }, 500);
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, 550);
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
    }, 2000);
  }
}
