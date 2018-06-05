import { Component, OnInit } from '@angular/core';
import { RouterLinkService, PwRouterLink } from '../core/router-link.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  routerLinks: PwRouterLink[];
  routerLinksFooter: PwRouterLink[];

  constructor(private routerLinkService: RouterLinkService) { }

  ngOnInit() {
    this.routerLinkService.routes.subscribe(routerLinks => {
      this.routerLinks = routerLinks ? routerLinks.filter(link => link.placement === 'Navbar') : routerLinks;
      this.routerLinksFooter = routerLinks ? routerLinks.filter(link => link.placement === 'Footer') : routerLinks;
    });
  }
}
