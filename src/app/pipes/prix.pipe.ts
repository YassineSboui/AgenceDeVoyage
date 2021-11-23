import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prix'
})
export class PrixPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
