import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit{

  miFormulario: FormGroup = this.fb.group ({
    genero: [ 'M', Validators.required ],
    notificaciones: [ true, Validators.required ],
    condiciones: [ false, Validators.requiredTrue ]
  });

  persona = {
    genero: 'F',
    notificaciones: true
  }

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {

    /* Poniendo las llaves y los puntos suspensivos por delante de persona, podemos añadirle después las condiciones que queremos que se añadan */
    this.miFormulario.reset({
      ...this.persona,
    condiciones: true 
    });

    /* Para subscribirse a los cambios del formulario */
    this.miFormulario.valueChanges.subscribe( form => {
      delete form.condiciones;
      this.persona = form;
    })

    /* Otra forma de hacer lo mismo que en lo anterior sería con la desestructuracion. De esta forma no tenemos que realizar el delete de las condiciones ya que las
       estamos separando del resto de campos */
    this.miFormulario.valueChanges.subscribe( ({ condiciones, ...rest }) => {
      this.persona = rest;
    })

    /* Para subscribirse a cuando cambie un unico campo del formulario */
    /* this.miFormulario.get('condiciones')?.valueChanges.subscribe( newValue => {
        console.log(newValue);
    }) */
  }

  guardar() {

    const formValue = { ...this.miFormulario.value };

    delete formValue.condiciones;

    this.persona = formValue;
  }

}
