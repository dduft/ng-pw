import { ValidatorFn } from '@angular/forms';

export interface FieldConfig {
  disabled?: boolean;
  label?: string;
  name: string;
  options?: string[];
  placeholder?: string;
  type: string;
  validation?: ValidatorFn[];
  value?: any;
  required?: boolean;
  notes?: string;
  columnWidth?: number;
  size?: number;
  inputfieldClass?: string;
  fieldWidthGridNumber?: number;
}
