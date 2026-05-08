import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyPrefix',
  standalone: true
})
export class CurrencyPrefixPipe implements PipeTransform {
  transform(value: string | number): string {
    if (!value) return '';
    return `R$: ${value}`;
  }
}