import { Component, OnInit } from '@angular/core';
import { FormFieldComponent } from '../form-field/form-field.component';

@Component({
  selector: 'form-select-multi',
  templateUrl: './form-select-multi.component.html',
  styleUrls: ['./form-select-multi.component.scss']
})
export class FormSelectMultiComponent extends FormFieldComponent implements OnInit {
  settings: any;

  ngOnInit() {
    super.ngOnInit();

    this.settings = {
      labelKey: 'title',
      text: '',
      enableCheckAll: false,
      classes: 'form-control'
    };
  }
}
