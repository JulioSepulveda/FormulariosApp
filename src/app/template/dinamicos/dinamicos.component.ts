import { Component } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favoritos[];
}

interface Favoritos {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  nuevoJuego: string = '';

  
  persona: Persona = {
    nombre: 'Julio',
    favoritos: [
      { id: 1, nombre: 'Metal Gear' },
      { id: 2, nombre: 'Super Mario Odiseys' },
    ]
  }

  guardar() {
    console.log('Elemento guardado');
  }

  eliminar ( index: number ) {
    this.persona.favoritos.splice(index, 1);
  }

  agregar() {
    const nuevo: Favoritos = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    };

    this.persona.favoritos.push( nuevo );
    this.nuevoJuego = '';
  }

}
