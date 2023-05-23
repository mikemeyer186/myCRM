import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from './dialog-add-user/dialog-add-user.component';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  newCustomerName: String = '';

  constructor(public addDialog: MatDialog) {}

  addUserDialogOpen() {
    const addDialog = this.addDialog.open(DialogAddUserComponent, {
      maxWidth: '100vw',
    });

    addDialog.afterClosed().subscribe((data: string) => {
      if (data) {
        console.log(data);
      }
    });
  }

  addUserDialogClose() {
    this.addDialog.closeAll();
  }
}
