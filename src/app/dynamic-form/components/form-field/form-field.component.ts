import { Component, OnInit, HostBinding } from '@angular/core';
import { FieldConfig } from '../../models/field-config.interface';
import { FormGroup } from '@angular/forms';
import { Field } from '../../models/field.interface';

export abstract class FormFieldComponent implements Field, OnInit {
  config: FieldConfig;
  group: FormGroup;

  @HostBinding('class') clazz: string;

  ngOnInit() {
    const gridNumber = Math.round((this.config.columnWidth || 100) / 100 * 12);
    this.clazz = 'col-md-' + gridNumber;
    this.config.fieldWidthGridNumber = Math.round((this.config.size || 100) / 100 * 12);
  }

  isFieldValid(field: string) {
    return (this.group.get(field).invalid && this.group.get(field).touched);
  }
}
