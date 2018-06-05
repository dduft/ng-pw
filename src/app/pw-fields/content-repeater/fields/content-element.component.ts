import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { environment } from '../../../../environments/environment';

export abstract class ContentElementComponent implements OnInit {
  pwBaseUrl: string = environment.pwBaseUrl;

  @Input()
  public field: any;

  @HostBinding('class') clazz: string;

  constructor() { }

  ngOnInit() {
    this.clazz = 'content-element-'.concat(this.field.sort);
  }
}
