import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'],
})
export class DialogAddUserComponent {
  constructor(public userService: UserService) {}
}
