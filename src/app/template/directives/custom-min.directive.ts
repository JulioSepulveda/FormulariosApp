import { Directive, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, Validator } from "@angular/forms";


/* Para que se ejecute la directiva cualquier componente del html tiene que tener los atributos customMin y ngModel */
/* Se tiene que implementar la clase Validator para hacer el control */
/* La directiva se tiene que declarar en el módulo en el que se quiere aplicar */
@Directive({
    selector: '[customMin][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirective,
        multi: true
    }]
})
export class CustomMinDirective implements Validator{

    @Input() minimo!: number;

    constructor() {}

    validate( control: FormControl ) {
        const inputValue = control.value;

        return ( inputValue < this.minimo ) ? { 'customMin': true } : null;
    }

}