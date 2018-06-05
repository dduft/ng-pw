import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, OnInit, Type, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormButtonComponent } from '../form-button/form-button.component';
import { FormInputComponent } from '../form-input/form-input.component';
import { FormSelectComponent } from '../form-select/form-select.component';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';
import { FormTextareaComponent } from '../form-textarea/form-textarea.component';
import { FormSelectMultiComponent } from '../form-select-multi/form-select-multi.component';
import { FormRadiosComponent } from '../form-radios/form-radios.component';
import { FormInputDateComponent } from '../form-input-date/form-input-date.component';

const components: {[type: string]: Type<Field>} = {
  submit: FormButtonComponent,
  cancel: FormButtonComponent,
  textarea: FormTextareaComponent,
  select: FormSelectComponent,
  select_multi: FormSelectMultiComponent,
  radio: FormRadiosComponent,
  text: FormInputComponent,
  email: FormInputComponent,
  date: FormInputDateComponent,
  time: FormInputComponent,
  number: FormInputComponent
};

@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements Field, OnChanges, OnInit {
  @Input()
  config: FieldConfig;

  @Input()
  group: FormGroup;

  component: ComponentRef<Field>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  ngOnChanges() {
    if (this.component) {
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
    }
  }

  ngOnInit() {
    if (!components[this.config.type]) {
      const supportedTypes = Object.keys(components).join(', ');
      throw new Error(
        `Trying to use an unsupported type (${this.config.type}).
        Supported types: ${supportedTypes}`
      );
    }
    const component = this.resolver.resolveComponentFactory<Field>(components[this.config.type]);
    this.component = this.container.createComponent(component);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }
}
