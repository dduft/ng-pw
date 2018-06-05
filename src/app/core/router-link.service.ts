import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from '../../environments/environment';

export interface PwRouterLink {
  path: string;
  text: string;
  placement: string;
}

@Injectable()
export class RouterLinkService {
  routes = new BehaviorSubject<PwRouterLink[]>(null);

  setRouterLinks(routes: PwRouterLink[]) {
    this.routes.next(routes);
  }

  // removes leading and tailing '/'
  sanitizeUrl(path: string) {
    path = path.slice(1);
    let index = path.lastIndexOf('/');
    path = index === path.length - 1 ? path.substring(0, index) : path;
    index = index === -1 ? path.length : index + 1;
    return path;
  }

  // extract '/en' from '/en/faq'
  getUrlPrefix(url: string) {
    const urlFragments = url.split('/');
    const urlPrefix = urlFragments[1].length === 2 ? `${urlFragments[1]}` : `${environment.defaultLanguage}`;
    return urlPrefix === '' ? '' : `/${urlPrefix}`;
  }

  urlToClassname(url: string): string {
    const prefix = this.getUrlPrefix(url);

    const _url = url.replace(prefix.concat('/'), '').replace(/[\/]/g, '_');
    return _url === '_' ? 'home' : _url;
  }
}
