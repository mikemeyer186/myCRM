import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddCustomerComponent } from './dialog-add-customer/dialog-add-customer.component';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  newCustomerName: String = '';

  constructor(public addDialog: MatDialog) {}

  addCustomerDialogOpen() {
    const addDialog = this.addDialog.open(DialogAddCustomerComponent, {
      maxWidth: '100vw',
    });

    addDialog.afterClosed().subscribe((data: string) => {
      if (data) {
        console.log(data);
      }
    });
  }

  addCustomerDialogClose() {
    this.addDialog.closeAll();
  }
}
