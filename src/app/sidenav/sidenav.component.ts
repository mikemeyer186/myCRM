import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  constructor(public GlobalService: GlobalService) {}
}
