import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  /* Para crear un array dentro de miFormulario lo tenemos que hacer con la funcion this.fb.array(). El resto es igual que para un campo simple */
  miFormulario: FormGroup = this.fb.group({
    nombre: [ '', [ Validators.required, Validators.minLength(3) ] ],
    favoritos: this.fb.array( [
      [ 'Metal Gear' ],
      [ 'Super Mario Bros' ]
    ], Validators.required )
  });

  nuevoFavorito: FormControl = this.fb.control( '', Validators.required );

  /* Este get devuelve los datos del favoritos como un array y no como un FormControl ya que si no el HTML no es capaz de leerlos */
  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor( private fb: FormBuilder ) { }

  validarCampo( campo: string ) {
    return this.miFormulario.controls[ campo ].errors &&
           this.miFormulario.controls[ campo ].touched
  }

  agregarFavorito() {
    if ( this.nuevoFavorito.invalid ) {
      return;
    }

    /* Las dos lineas siguiente hacen lo mismo, solo que una usa el servicio inyectado en el constructor y el otro no */
    // this.favoritosArr.push( new FormControl( this.nuevoFavorito.value, Validators.required ));
    this.favoritosArr.push( this.fb.control( this.nuevoFavorito.value, Validators.required ));

    this.nuevoFavorito.reset();
  }

  borrar( i: number ) {
    this.favoritosArr.removeAt( i );
  }

  guardar() {

    if ( this.miFormulario.invalid ) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log( this.miFormulario.value );
    this.miFormulario.reset();
  }

}
