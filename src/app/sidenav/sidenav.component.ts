import { Component } from '@angular/core';
import { CrmService } from '../crm.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  constructor(public service: CrmService) {}
}
