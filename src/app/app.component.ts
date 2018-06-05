import { Component } from '@angular/core';
import { PwService } from './core/pw.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public notificationOptions = {
    timeOut: 5000,
    pauseOnHover: true,
    clickToClose: true
  };
}
