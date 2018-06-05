import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpEvent,
  HttpInterceptor,
  HttpHandler
} from '@angular/common/http';
import { PwService, AuthData } from './pw.service';
import 'rxjs/add/operator/do';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
    public router: Router,
    public auth: PwService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {

        const authData: AuthData = {
          jwt: event.headers.get('jwt'),
        };
        this.auth.setAuthData(authData);
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        console.log(err);
      }
    });
  }
}
