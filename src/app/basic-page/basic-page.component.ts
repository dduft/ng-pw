import { Component, OnInit, HostBinding } from '@angular/core';
import { PwService } from '../core/pw.service';
import { Router } from '@angular/router';
import { RouterLinkService } from '../core/router-link.service';

@Component({
  selector: 'app-page-content-default',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.scss']
})
export class BasicPageComponent implements OnInit {
  page: any;

  @HostBinding('class') clazz: string;

  constructor(
    protected pwService: PwService,
    protected router: Router,
    protected routerLinkService: RouterLinkService
  ) {}

  ngOnInit() {
    this.clazz = this.routerLinkService.urlToClassname(this.router.url);

    const urlPrefix = this.routerLinkService.getUrlPrefix(this.router.url);
    const params = {path: this.router.url};
    this.pwService.getPage(urlPrefix, params).subscribe(res => {
      this.page = res;
    });
  }
}
