import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: String): any {

    if (!value) { return null; }

    return value.substr(0, 4) + '....';
  }

}
