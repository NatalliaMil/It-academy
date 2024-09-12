import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeDay',
})
export class ChangeDayPipe implements PipeTransform {
  transform(value: string): string {
    const numberIcon = Number(value[1]);
    return numberIcon > 2 && numberIcon < 10 ? value.replace('n', 'd') : value;
  }
}
