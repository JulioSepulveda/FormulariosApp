import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { nombreApellidoPattern, emailPattern, noPuedeSerJulio } from '../../../shared/validator/validaciones';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})

/* Las validaciones las podemos realizar o bien en un archivo ts normal o en un servicio. Están las dos opciones en la carpeta shared/validator */
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({

    //El pattern es para validar el formato de la celda
    nombre: [ '', [ Validators.required, Validators.pattern( this.vs.nombreApellidoPattern ) ] ],
    email: [ '', [ Validators.required, Validators.pattern( this.vs.emailPattern ) ], [ this.emailValidator ] ],
    username: [ '', [ Validators.required, this.vs.noPuedeSerJulio ] ],
    password: [ '', [ Validators.required, Validators.minLength(6) ] ],
    confPassword: [ '', [ Validators.required ] ],
  }, 
  /* Este segundo objeto son opciones que podemos mandar al FormGroup */
  {
    validators: [ this.vs.camposIguales( 'password', 'confPassword' ) ]
  })

  /* Control con varios mensajes de error para una misma celda */
  get emailErrorMsg(): string {
    
    const errors = this.miFormulario.get('email')?.errors;

    if ( errors?.required ) {
      return 'Email es obligatorio'
    }
    else if ( errors?.pattern ) {
      return 'El valor no tiene formato de email'
    }
    else if ( errors?.emailTomado ) {
      return 'El email ya ha sido usado'
    }
    else {
      return '';
    }
  }

  constructor( private fb: FormBuilder,
               private vs: ValidatorService,
               private emailValidator: EmailValidatorService ) { }

  ngOnInit(): void {

    this.miFormulario.reset({
      nombre: 'Julio Sepulveda',
      email: 'julio240688@gmail.com',
      username: 'JulioSH'
    });
  }

  campoNoValido ( campo: string ) {
    return this.miFormulario.get(campo)?.invalid 
            && this.miFormulario.get(campo)?.touched;
  }



  /* Los tres siguientes metodos son una forma de poner varios controles sobre una celda. El problema es que hay mucho codigo en el html */
  /* emailRequired() {
    return this.miFormulario.get('email')?.errors?.required
              && this.miFormulario.get('email')?.touched
  }

  emailPattern() {
    return this.miFormulario.get('email')?.errors?.pattern
              && this.miFormulario.get('email')?.touched
  }

  emailTomado() {
    return this.miFormulario.get('email')?.errors?.emailTomado
              && this.miFormulario.get('email')?.touched
  } */

  submitFormulario() {
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched;
  }

}
