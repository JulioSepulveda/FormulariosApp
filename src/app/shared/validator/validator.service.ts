import { Injectable } from '@angular/core';
import { ValidationErrors, FormControl, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  //Formato para que solo admita letras en mayusculas y minusculas y que tiene que tener dos palabras
  nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  //Formato para validar el email 
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  noPuedeSerJulio ( control: FormControl ): ValidationErrors | null {
    const valor: string = control.value?.trim().toLowerCase();

    if (valor === 'julio'){
      return {
        noJulio: true,
      }
    }

    return null;
  }

  /* Compara que las celdas de las contraseñas sean iguales */
  camposIguales( campo1: string, campo2: string) {
    
    return ( formGroup: AbstractControl ): ValidationErrors | null => {
      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;

      if ( pass1 !== pass2 ) {
        formGroup.get(campo2)?.setErrors({ noIguales: true });

        return { noIguales: true }
      }

      formGroup.get(campo2)?.setErrors(null);

      return null;
    }
  }
}
