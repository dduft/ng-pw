import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { PwService } from './pw.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: PwService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authData = this.auth.currentAuthData;
    if (authData) {
      request = request.clone({
        setHeaders: {
          'authorization': `Bearer ${authData.jwt}`
        }
      });
    }

    return next.handle(request);
  }
}
