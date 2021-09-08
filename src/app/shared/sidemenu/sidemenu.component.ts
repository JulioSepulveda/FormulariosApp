import { Component } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
}

/* El style creado hace que cuando el raton pase por las celdas de sidemenu se convierta en una mano. De esta forma indicamos que son enlaces todos los objetos del menu */
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
     ` li { cursor:pointer; } `
  ]
})
export class SidemenuComponent {

  templateMenu: MenuItem[] = [
    {
      texto: 'basicos',
      ruta: './template/basicos'
    },
    {
      texto: 'dinamicos',
      ruta: './template/dinamicos'
    },
    {
      texto: 'switches',
      ruta: './template/switches'
    },
  ];

  reactiveMenu: MenuItem[] = [
    {
      texto: 'basicos',
      ruta: './reactive/basicos'
    },
    {
      texto: 'dinamicos',
      ruta: './reactive/dinamicos'
    },
    {
      texto: 'switches',
      ruta: './reactive/switches'
    },
  ];

  authMenu: MenuItem[] = [
    {
      texto: 'registro',
      ruta: './auth/registro'
    },
    {
      texto: 'login',
      ruta: './auth/login'
    },
  ];


}
