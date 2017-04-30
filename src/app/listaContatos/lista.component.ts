import { Component } from '@angular/core';
import { Contato } from '../contato/contato.component'

@Component({
    selector: 'listaContatos',
    templateUrl: 'listaContatos.html',
})

export class ListaComponent {

  contato: Contato = new Contato("allan", "19981982528", "rua um", "this is it");
  contatos: Array<Contato> = new Array<Contato>();
  // this.contatos.push();

}
