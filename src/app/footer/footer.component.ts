import { Component, OnInit } from '@angular/core';
import { RouterLinkService, PwRouterLink } from '../core/router-link.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  routerLinks: PwRouterLink[];

  constructor(private routerLinkService: RouterLinkService) { }

  ngOnInit() {
    this.routerLinkService.routes.subscribe(routerLinks => {
      this.routerLinks = routerLinks ? routerLinks.filter(link => link.placement === 'Footer') : routerLinks;
    });
  }

}
