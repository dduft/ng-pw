import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FieldConfig } from '../../models/field-config.interface';
import { PwFieldtype, PwInputfield } from '../../../core/pw.service';

@Component({
  exportAs: 'dynamicForm',
  selector: 'app-dynamic-form',
  templateUrl: 'dynamic-form.component.html',
  styleUrls: ['dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnChanges, OnInit {

  @Input()
  public pwForm: any;

  @Output()
  submit: EventEmitter<any> = new EventEmitter<any>();

  config: FieldConfig[] = [];
  form: FormGroup;

  get controls() { return this.config.filter(({type}) => type !== 'button'); }
  get changes() { return this.form.valueChanges; }
  get valid() { return this.form.valid; }
  get value() { return this.form.value; }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    for (const key in this.pwForm) {
      if (this.pwForm.hasOwnProperty(key) && key.startsWith('formfield_')) {
        const field = this.pwForm[key];

        const control: FieldConfig = {
          label: field.label,
          name: key,
          required: !!field.required,
          notes: field.notes,
          columnWidth: field.columnWidth,
          size: field.size,
          placeholder: field.placeholder,
          type: null
        };

        const validators = [];
        if (!!field.required) {
          validators.push(Validators.required);
        }

        switch (field.type) {
          case PwFieldtype.FieldtypeTextarea:
            control.type = 'textarea';
            break;
          case PwFieldtype.FieldtypeOptions:
            switch (field.inputfieldClass) {
              case(PwInputfield.InputfieldSelect):
                control.type = 'select';
                break;
              case(PwInputfield.InputfieldSelectMultiple):
                control.type = 'select_multi';
                break;
              case(PwInputfield.InputfieldRadios):
                control.type = 'radio';
                break;
            }

            control.options = field.options;
            control.inputfieldClass = field.inputfieldClass;
            break;
          case PwFieldtype.FieldtypeText:
            control.type = 'text';
            break;
          case PwFieldtype.FieldtypeEmail:
            control.type = 'email';
            validators.push(Validators.email);
            break;
          case PwFieldtype.FieldtypeDatetime:
            control.type = 'date';
            validators.push(Validators.pattern(/^(0?[1-9]|[12][0-9]|3[01])[\/\-\.](0?[1-9]|1[012])[\/\-\.]\d{4}$/));
            break;
          case PwFieldtype.FieldtypeInteger:
            control.type = 'number';
            break;
            case PwFieldtype.FieldtypeFormButton:
            switch (field.inputfieldClass) {
              case(PwInputfield.InputfieldFormButton):
                control.type = 'submit';
                break;
              case(PwInputfield.InputfieldFormCancelButton):
                control.type = 'cancel';
                break;
              }
            break;
          default:
            control.type = field.type;
        }
        control.validation = validators;
        this.config.push(control);
      }
    }

    this.form = this.createGroup();
  }

  ngOnChanges() {
    if (this.form) {
      const controls = Object.keys(this.form.controls);
      const configControls = this.controls.map((item) => item.name);

      controls
        .filter((control) => !configControls.includes(control))
        .forEach((control) => this.form.removeControl(control));

      configControls
        .filter((control) => !controls.includes(control))
        .forEach((name) => {
          const config = this.config.find((control) => control.name === name);
          this.form.addControl(name, this.createControl(config));
        });

    }
  }

  createGroup() {
    const group = this.fb.group({});
    this.controls.forEach(control => group.addControl(control.name, this.createControl(control)));
    return group;
  }

  createControl(config: FieldConfig) {
    const { disabled, validation, value } = config;
    return this.fb.control({ disabled, value }, validation);
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.submit.emit(this.value);
  }

  setDisabled(name: string, disable: boolean) {
    if (this.form.controls[name]) {
      const method = disable ? 'disable' : 'enable';
      this.form.controls[name][method]();
      return;
    }

    this.config = this.config.map((item) => {
      if (item.name === name) {
        item.disabled = disable;
      }
      return item;
    });
  }

  setValue(name: string, value: any) {
    this.form.controls[name].setValue(value, {emitEvent: true});
  }

  appendConfig(fieldConfig: FieldConfig) {
    this.config.push(fieldConfig);
  }

  markTouched() {
    this.markFormGroupTouched(this.form);
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        control.controls.forEach(c => this.markFormGroupTouched(c));
      }
    });
  }
}
