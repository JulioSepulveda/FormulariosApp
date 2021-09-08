import { FormControl } from '@angular/forms';
//Validaciones de los formularios

//Formato para que solo admita letras en mayusculas y minusculas y que tiene que tener dos palabras
export const nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
//Formato para validar el email 
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const noPuedeSerJulio = ( control: FormControl )  => {
    const valor: string = control.value?.trim().toLowerCase();

    if (valor === 'julio'){
      return {
        noJulio: true,
      }
    }

    return null;
  }