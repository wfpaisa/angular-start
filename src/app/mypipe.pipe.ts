import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe',
})
export class MypipePipe implements PipeTransform {
  transform(value: string | undefined, ...args: unknown[]): unknown {
    if (!value) return null;

    return value.toUpperCase();
  }
}
