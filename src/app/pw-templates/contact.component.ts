import { Component, OnInit } from '@angular/core';
import { BasicFormComponent } from './basic-form/basic-form.component';

@Component({
  selector: 'app-contact',
  templateUrl: './basic-form/basic-form.component.html',
  styleUrls: ['./basic-form/basic-form.component.scss']
})
export class ContactComponent extends BasicFormComponent implements OnInit {

  ngOnInit() {
    super.ngOnInit();
  }

  submit(value: {[name: string]: any}) {
    this.form.markTouched();

    if (this.form.valid) {
      const urlPrefix = this.routerLinkService.getUrlPrefix(this.router.url);

      this.pwService.sendMail(urlPrefix, value).subscribe(res => {
        const notification = this.notifications.find(m => m.data.notification_key.data === 'mail_success');
        this.notificationService.info(notification.data.notification_title.data, notification.data.notification_content.data);
        this.router.navigate(['/']);
      });
    }
  }
}
