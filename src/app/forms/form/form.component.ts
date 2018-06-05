import { Component, OnInit, ViewChild, HostBinding } from '@angular/core';
import { PwService } from '../../core/pw.service';
import { Router } from '@angular/router';
import { RouterLinkService } from '../../core/router-link.service';
import { NotificationsService } from 'angular2-notifications';
import { DynamicFormComponent } from '../../dynamic-form/containers/dynamic-form/dynamic-form.component';
import { BasicPageComponent } from '../../basic-page/basic-page.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent extends BasicPageComponent implements OnInit {

  @ViewChild(DynamicFormComponent)
  form: DynamicFormComponent;

  notifications: any;

  constructor(
    protected notificationService: NotificationsService,
    protected pwService: PwService,
    protected router: Router,
    protected routerLinkService: RouterLinkService
  ) {
    super(pwService, router, routerLinkService);
  }

  ngOnInit() {
    this.clazz = this.routerLinkService.urlToClassname(this.router.url);

    const urlPrefix = this.routerLinkService.getUrlPrefix(this.router.url);
    const params = {path: this.router.url};
    this.pwService.getPage(urlPrefix, params).subscribe(res => {
      this.page = res;
      this.notifications = this.page.data.notifications.data;
    });
  }
}
