import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-textarea-html-wysiwyg',
  templateUrl: './textarea-html-wysiwyg.component.html',
  styleUrls: ['./textarea-html-wysiwyg.component.scss']
})
export class TextareaHtmlWysiwygComponent implements OnInit {

  @Input()
  public field: any;

  constructor() { }

  ngOnInit() {
  }
}
