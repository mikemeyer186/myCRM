import { Component, ViewChild } from '@angular/core';
import { CustomerService } from '../customer.service';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent {
  constructor(
    public customerService: CustomerService,
    private _liveAnnouncer: LiveAnnouncer
  ) {}

  dataSource = new MatTableDataSource(this.customerService.customerList);
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'street',
    'postalCode',
    'city',
  ];

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
      console.log(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
      console.log('Sorting cleared');
    }
  }
}
