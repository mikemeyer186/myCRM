import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  page: string = 'DASHBOARD';
  routerEvent: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.routerEvent = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && !(this.router.url == '/')) {
        this.getPageFromUrl();
      }
    });
  }

  /**
   * Get the page title from the url
   */
  getPageFromUrl() {
    this.page = this.router.url.split('/')[1].toUpperCase();
  }
}
