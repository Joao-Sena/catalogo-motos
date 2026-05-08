import { CurrencyPrefixPipe } from './currency-prefix.pipe';

describe('CurrencyPrefixPipe', () => {
  let pipe: CurrencyPrefixPipe;

  beforeEach(() => {
    pipe = new CurrencyPrefixPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should add "R$: " prefix to string value', () => {
    expect(pipe.transform('1000')).toBe('R$: 1000');
  });

  it('should add "R$: " prefix to number value', () => {
    expect(pipe.transform(500)).toBe('R$: 500');
  });

  it('should handle empty string', () => {
    expect(pipe.transform('')).toBe('');
  });

  it('should handle zero', () => {
    expect(pipe.transform(0)).toBe('');
  });
});
