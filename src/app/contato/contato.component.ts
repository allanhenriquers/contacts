import { Component } from '@angular/core';

@Component({
    selector: 'contato',
    templateUrl: 'htmls/contato.html',
})

export class Contato{
  // nome: String;
  // cel: String;
  // endereco: String;
  // dataNascimento: Date;
    constructor(
      private nome: String,
      private cel: String,
      private endereco: String,
      private dataNascimento: String){
  }

}
