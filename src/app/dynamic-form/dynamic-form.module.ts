import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { DynamicFormComponent } from './containers/dynamic-form/dynamic-form.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormTextareaComponent } from './components/form-textarea/form-textarea.component';
import { FormRadiosComponent } from './components/form-radios/form-radios.component';
import { FormSelectMultiComponent } from './components/form-select-multi/form-select-multi.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { FormInputDateComponent } from './components/form-input-date/form-input-date.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMultiSelectModule
  ],
  declarations: [
    DynamicFieldDirective,
    DynamicFormComponent,
    FormButtonComponent,
    FormInputComponent,
    FormInputDateComponent,
    FormSelectComponent,
    FormTextareaComponent,
    FormRadiosComponent,
    FormSelectMultiComponent,
    FormInputDateComponent
  ],
  exports: [
    DynamicFormComponent
  ],
  entryComponents: [
    FormButtonComponent,
    FormInputComponent,
    FormInputDateComponent,
    FormSelectComponent,
    FormTextareaComponent,
    FormRadiosComponent,
    FormSelectMultiComponent
  ]
})
export class DynamicFormModule {}
