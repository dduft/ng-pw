import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WindowRef } from './core/window-ref.service';
import { KeyValuePipe } from './core/key-value.pipe';
import { KeyValueFieldsPipe } from './core/key-value-fields.pipe';
import { PwService } from './core/pw.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './core/token.interceptor';
import { ContentRepeaterComponent } from './pw-fields/content-repeater/content-repeater.component';
import { HeadlineComponent } from './pw-fields/content-repeater/fields/headline/headline.component';
import { GalleryComponent } from './pw-fields/content-repeater/fields/gallery/gallery.component';
import { TextImageBoxComponent } from './pw-fields/content-repeater/fields/text-image-box/text-image-box.component';
import { TitleComponent } from './pw-fields/title/title.component';
import { ImageSingleComponent } from './pw-fields/image-single/image-single.component';
import { ImageMultiComponent } from './pw-fields/image-multi/image-multi.component';
import { TextareaHtmlWysiwygComponent } from './pw-fields/textarea-html-wysiwyg/textarea-html-wysiwyg.component';
import { TextfieldComponent } from './pw-fields/textfield/textfield.component';
import { RouterLinkService } from './core/router-link.service';
import { CardsBoxComponent } from './pw-fields/content-repeater/fields/cards-box/cards-box.component';
import { AccordionsBoxComponent } from './pw-fields/content-repeater/fields/accordions-box/accordions-box.component';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextImageMultiComponent } from './pw-fields/content-repeater/fields/text-image-multi/text-image-multi.component';
import { NotFoundComponent } from './pw-templates/not-found/not-found.component';
import { BasicPageComponent } from './pw-templates/basic-page/basic-page.component';
import { NavbarComponent } from './pw-templates/navbar/navbar.component';
import { FooterComponent } from './pw-templates/footer/footer.component';
import { ContactComponent } from './pw-templates/contact.component';
import { BasicFormComponent } from './pw-templates/basic-form/basic-form.component';


@NgModule({
  declarations: [
    AppComponent,
    KeyValuePipe,
    KeyValueFieldsPipe,
    ContentRepeaterComponent,
    HeadlineComponent,
    TextImageBoxComponent,
    TitleComponent,
    ImageSingleComponent,
    ImageMultiComponent,
    TextareaHtmlWysiwygComponent,
    GalleryComponent,
    TextfieldComponent,
    NotFoundComponent,
    BasicPageComponent,
    NavbarComponent,
    FooterComponent,
    CardsBoxComponent,
    AccordionsBoxComponent,
    ContactComponent,
    TextImageMultiComponent,
    BasicFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DynamicFormModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [
    HttpClientModule,
    WindowRef,
    PwService,
    RouterLinkService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
