import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import {Directive} from '@angular/core';
import { Observable } from 'rxjs';

@Directive({
  selector: '[nameExist]',
  providers: [
      { provide: NG_ASYNC_VALIDATORS, useExisting: NameExistDirective, multi: true }
  ]
})
export class NameExistDirective implements AsyncValidator {

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return validateNameExist(control);
  }

}

export function validateNameExist(control: AbstractControl): Observable<ValidationErrors | null> {
  return new Observable(observer => {

    setTimeout(() => {

      if(control.value === "Joney JS") {
        observer.next({ nameExist: 'Esse nome já existe, escolha outro.' });
      } else {
        observer.next(null);
      }
      observer.complete();

    }, 1000);
    
  });
}
