import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'keyValueFields'})
export class KeyValueFieldsPipe implements PipeTransform {
  transform(value, fieldnames: string[]): any {
    const keys = [];
    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        const fieldname = fieldnames.find(name => key.startsWith(name));
        if (fieldname) {
          keys.push({key: key, value: value[key]});
        }
      }
    }
    return keys;
  }
}
