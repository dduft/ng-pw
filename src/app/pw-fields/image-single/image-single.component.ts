import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-image-single',
  templateUrl: './image-single.component.html',
  styleUrls: ['./image-single.component.scss']
})
export class ImageSingleComponent implements OnInit {
  pwBaseUrl: string = environment.pwBaseUrl;

  @Input()
  public data: any;

  constructor() { }

  ngOnInit() {
  }

}
