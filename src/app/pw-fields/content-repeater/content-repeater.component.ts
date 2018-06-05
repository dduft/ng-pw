import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-repeater',
  templateUrl: './content-repeater.component.html',
  styleUrls: ['./content-repeater.component.scss']
})
export class ContentRepeaterComponent implements OnInit {

  @Input()
  public data: any;

  constructor() { }

  ngOnInit() {
  }
}
