import { Component, OnInit } from '@angular/core';
import { ContentElementComponent } from '../content-element.component';

@Component({
  selector: 'app-text-image-box',
  templateUrl: './text-image-box.component.html',
  styleUrls: ['./text-image-box.component.scss']
})
export class TextImageBoxComponent extends ContentElementComponent implements OnInit {
  ngOnInit() {
    super.ngOnInit();
    const type = this.field.data.text_image_type;
    if (type) {
      this.clazz = this.clazz.concat(' ', type.data);
    }
  }
}
