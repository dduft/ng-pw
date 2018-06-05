import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { environment } from '../../environments/environment';

export interface AuthData {
  jwt: string;
}

// export interface SignInUser {
//   username: string;
//   password: string;
// }

export class PwFieldtype {
    public static readonly FieldtypeTextarea = 'FieldtypeTextarea';
    public static readonly FieldtypeOptions = 'FieldtypeOptions';
    public static readonly FieldtypeText = 'FieldtypeText';
    public static readonly FieldtypeEmail = 'FieldtypeEmail';
    public static readonly FieldtypeDatetime = 'FieldtypeDatetime';
    public static readonly FieldtypeInteger = 'FieldtypeInteger';
    public static readonly FieldtypeFormButton = 'FieldtypeFormButton';
}

export class PwInputfield {
  public static readonly InputfieldSelect = 'InputfieldSelect';
  public static readonly InputfieldSelectMultiple = 'InputfieldSelectMultiple';
  public static readonly InputfieldRadios = 'InputfieldRadios';
  public static readonly InputfieldFormButton = 'InputfieldFormButton';
  public static readonly InputfieldFormCancelButton = 'InputfieldFormCancelButton';
}

@Injectable()
export class PwService {

  get currentAuthData(): AuthData {
      return this._currentAuthData;
  }

  private _currentAuthData: AuthData;

  constructor(
    public http: HttpClient,
    private router: Router) {
  }

  // for debugging
  // ?XDEBUG_SESSION_START=xdebug-atom

  getPage(urlPrefix, params?: any) {
    return this.http.get<any>(`${environment.pwUrl}${urlPrefix}/api/pages/path`, {params: params});
  }

  getRoutes(urlPrefix, params?: any) {
    return this.http.get<any>(`${environment.pwUrl}${urlPrefix}/api/pages`, {params: params});
  }

  sendMail(urlPrefix, params?: any) {
    return this.http.patch<any>(`${environment.pwUrl}${urlPrefix}/api/contact/mail`, {params: params});
  }

  sendWantHelp(urlPrefix, params?: any) {
    return this.http.patch<any>(`${environment.pwUrl}${urlPrefix}/api/contact/want_help`, {params: params});
  }

  sendNeedHelp(urlPrefix, params?: any) {
    return this.http.patch<any>(`${environment.pwUrl}${urlPrefix}/api/contact/need_help`, {params: params});
  }

  login(): Observable<boolean> {
    const signInUser = {
      username: 'admin',
      password: '****'
    };
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post<any>(`${environment.pwUrl}/auth`, {params: signInUser, headers: headers})
    .map(
        res => {
          this.setAuthData(res);
          return true;
        }
    );
  }

  // Write auth data to storage
  setAuthData(authData: AuthData): void {
    if (this.checkAuthData(authData)) {
        this._currentAuthData = authData;

        localStorage.setItem('jwt', authData.jwt);
    }
  }

  private getAuthDataFromStorage(): void {
      const authData: AuthData = {
          jwt: localStorage.getItem('jwt'),
      };

      if (this.checkAuthData(authData)) {
          this._currentAuthData = authData;
      }
  }

  // Check if auth data complete and if response token is newer
  private checkAuthData(authData: AuthData): boolean {
    if (authData.jwt != null) {
      return true;
    }
  }

}
