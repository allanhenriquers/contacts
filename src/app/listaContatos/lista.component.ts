import { Component } from '@angular/core';
import { Contato } from '../contato/contato.component'

@Component({
    selector: 'listaContatos',
    templateUrl: 'listaContatos.html',
})

export class ListaComponent {

contato: Contato;
contatos: Array<Contato> = [new Contato("allan", "19981982528", "rua um", "this is it"),new Contato("Enzo", "12323214232", "rua dois", "it's not")];

}

var contato1: Contato = new Contato("allan", "19981982528", "rua um", "this is it");
var contato2: Contato = new Contato("Enzo", "12323214232", "rua dois", "it's not");
var contato3: Contato = new Contato("Gael", "12323214244", "rua tres", "maybe");

// this.contatos.push(contato1);
// this.contatos.push(contato2);
// this.contatos.push(contato3);
