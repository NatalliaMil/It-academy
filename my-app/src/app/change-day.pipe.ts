import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeDay',
})
export class ChangeDayPipe implements PipeTransform {
  transform(value: any): any {
    return Number(value[1]) > 2 && Number(value[1]) < 10
      ? value.replace('n', 'd')
      : value;
  }
}
