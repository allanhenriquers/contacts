import { Component } from '@angular/core';
import { Contato } from '../contato/contato.component'

@Component({
    selector: 'brand',
    templateUrl: '../../../htmls/brand.html',
})

export class listaContatos {
  
  contato: Array<Contato> ;
}
