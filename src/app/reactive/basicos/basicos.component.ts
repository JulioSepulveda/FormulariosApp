import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, Validator } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  /* PAra crear el formulario reactivo creamos el elemento de tipo FormGroup y dentro de el los atributos que hacen referencia a las celdas del formulario */
  /* miFormulario: FormGroup = new FormGroup({
    nombre      : new FormControl('Elemento Prueba'),
    precio      : new FormControl(1500),
    existencias : new FormControl(5)
  }); */

  /* Si utilizamos FormBuilder queda más sencillo aunque es exactamente lo mismo que lo anterior. Ahorramos texto */
  /* Cada atributo se especifica como un array ya que después del valor vienen las validaciones y las validaciones asincronas */
  /* Para poner más de una validacion tenemos que meterlos entre llaves */
  miFormulario: FormGroup = this.fb.group({
    nombre: [ , [ Validators.required, Validators.minLength(3) ] ],
    precio: [ , [ Validators.required, Validators.min(0) ] ],
    existencias: [ , [ Validators.required, Validators.min(0) ] ]
  })

  constructor( private fb: FormBuilder ) { }

  /* Ponemos un valor por defecto cuando se abre la página */
  /* Se usa el reset mejor que el setValue ya que con el reset no es necesario inicializar todos los elementos y también reseta el pristine */
  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: '',
      precio: 0,
      existencias: 0
    })
    
  }

  /* Las validaciones las podemos poneren el typeScript y solamente ser llamada esta funcion desde el HTML */
  campoEsValido( campo: string ) {
    return this.miFormulario.controls[ campo ].errors && 
           this.miFormulario.controls[ campo ].touched
  }

  guardar() {

    if ( this.miFormulario.invalid ) {
      /* mMarca como si se hubieran tocado todas las celdas para que se muestren los errores que hay en cada una de ellas una vez se pulsa el botón de guardar */
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    /* Resetea el formulario una vez se guarda la información */
    this.miFormulario.reset();
  }

}
