import { ElementRef } from '@angular/core';
import { AutomaticDigitsDirective } from './automatic-digits.directive';

describe('AutomaticDigitsDirective', () => {
  it('should create an instance', () => {
    const directive = new AutomaticDigitsDirective({} as ElementRef);
    expect(directive).toBeTruthy();
  });
});
