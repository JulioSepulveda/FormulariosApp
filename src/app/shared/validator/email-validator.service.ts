import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
/* Clase para validarde forma asincrona si el email ya ha sido usado mediante una petición http a una BBDD JSON */
export class EmailValidatorService implements AsyncValidator {

  constructor( private http: HttpClient ) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
  
    const email = control.value;
    
    /* En vez de devolver el objeto devuelto directamente, lo pasamos por un pipe para devolver un error controlado */
    return this.http.get<any[]>(`http://localhost:3000/usuarios?q=${ email }`)
              .pipe(
                delay(3000),
                map( resp => {
                  console.log(resp);
                  return ( resp.length === 0 ) ? null : { emailTomado: true }
                } )
              )

    throw new Error('Method not implemented.');
  }
}
