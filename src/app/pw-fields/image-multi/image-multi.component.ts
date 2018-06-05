import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { environment } from '../../../environments/environment';
declare const $: any;

@Component({
  selector: 'app-image-multi',
  templateUrl: './image-multi.component.html',
  styleUrls: ['./image-multi.component.scss']
})
export class ImageMultiComponent implements OnInit, AfterViewInit {
  pwBaseUrl: string = environment.pwBaseUrl;

  @Input()
  public data: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('.carousel').carousel();
  }
}
