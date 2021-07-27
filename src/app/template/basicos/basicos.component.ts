import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  /* Con el decorador ViewChild podemos recoger una variable local del html */
  @ViewChild('miFormulario') miFormulario!: NgForm;
  initForm = {
    producto: '',
    precio: 0,
    existencias: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): Boolean {
  return this.miFormulario?.controls.producto?.invalid 
         && this.miFormulario?.controls.producto?.touched;
  }

  precioValido(): Boolean {

    return this.miFormulario?.controls.precio?.touched
         && this.miFormulario?.controls.precio?.value < 0;
  }
    
  guardar( ) {
    console.log('Registro correcto');

    /* Para resetear el formulario cuando se pulsa el botón guardar y reseete también los atributos priscine y touched */
    /* Al poner los atriburos preco y existencias nos inicializa las celdas a 0 */
    this.miFormulario.resetForm({
      producto: '',
      precio: 0,
      existencias: 0
    });
  }

}
