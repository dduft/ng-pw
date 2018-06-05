import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { ContentElementComponent } from '../content-element.component';

@Component({
  selector: 'app-accordions-box',
  templateUrl: './accordions-box.component.html',
  styleUrls: ['./accordions-box.component.scss']
})
export class AccordionsBoxComponent extends ContentElementComponent {
}
