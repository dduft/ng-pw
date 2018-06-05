import { Component, OnInit, HostBinding } from '@angular/core';
import { ContentElementComponent } from '../content-element.component';

@Component({
  selector: 'app-cards-box',
  templateUrl: './cards-box.component.html',
  styleUrls: ['./cards-box.component.scss']
})
export class CardsBoxComponent extends ContentElementComponent implements OnInit {

  ngOnInit() {
    super.ngOnInit();
    const type = this.field.data.cards_type;
    if (type) {
      this.clazz = this.clazz.concat(' ', type.data);
    }
  }
}
