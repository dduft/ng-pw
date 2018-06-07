import { NgModule, ComponentFactoryResolver } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { PwService } from './core/pw.service';
import { RouterLinkService, PwRouterLink } from './core/router-link.service';
import { WindowRef } from './core/window-ref.service';
import { environment } from '../environments/environment';
import { BasicPageComponent } from './pw-templates/basic-page/basic-page.component';
import { ContactComponent } from './pw-templates/contact.component';
import { NotFoundComponent } from './pw-templates/not-found/not-found.component';


const routes: Routes = [
  {
    path: '**',
    component: NotFoundComponent
  }
];

export const componentsMap = {
  'home': BasicPageComponent,
  'basic-page': BasicPageComponent,
  'contact': ContactComponent,
  'default': BasicPageComponent
};


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  entryComponents: [
    BasicPageComponent,
    ContactComponent
  ]
})
export class AppRoutingModule {
  constructor(
    private pwService: PwService,
    private router: Router,
    private routerLinkService: RouterLinkService,
    private windowRef: WindowRef
  ) {

    const urlPrefix = this.routerLinkService.getUrlPrefix(windowRef.nativeWindow.location.pathname);

    this.pwService.getRoutes(urlPrefix).subscribe(res => {
      const pages = res;
      const routerLinks: PwRouterLink[] = [];

      pages.forEach(page => {
        const path = this.routerLinkService.sanitizeUrl(page.path);
        this.router.config.unshift({ path: path, component: this.getComponentForTemplate(page.template) });
        routerLinks.push({ text: page.title.data, path: path , placement: page.link_placement });
      });

      this.router.resetConfig(this.router.config);
      this.routerLinkService.setRouterLinks(routerLinks);

      const url = this.routerLinkService.sanitizeUrl(this.router.url);
      this.router.navigateByUrl(url);
    });
  }

  getComponentForTemplate(template: string) {
    const comp = componentsMap[template];
    return comp ? comp : componentsMap['default'];
  }
}
