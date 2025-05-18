import { Component, OnInit } from '@angular/core';
import { ViaCepModel } from './ViaCepModel';
import { ViacepService } from './viacep.service';
import { asLiteral } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-busca-cep',
  templateUrl: './busca-cep.component.html',
  styleUrls: ['./busca-cep.component.css']
})
export class BuscaCepComponent implements OnInit {

  viaCepModel: ViaCepModel = new ViaCepModel();
  cep: string;
  mostraArea: boolean = false;

  constructor(private viaCepService: ViacepService) { }

  ngOnInit(): void {
  }

  buscaCep() {
    this.viaCepService.getCep(this.cep)
      .subscribe(resposta => {
        if (resposta.estado == null) {
          alert('Cep não encontrado!');
        }
        console.log(resposta);
        this.viaCepModel = resposta;
        this.mostraArea = true;
      })
  }

  copiarTexto(){
    let textoParaCopiar = 
    'CEP: '+  this.viaCepModel.cep+' , '+
    'RUA: '+this.viaCepModel.logradouro+' , '+
    'COMPLEMENTO: '+this.viaCepModel.complemento+' , '+
    'UNIDADE: '+this.viaCepModel.unidade+' , '+
   'BAIRRO: '+this.viaCepModel.bairro+' , '+
    'CIDADE: '+this.viaCepModel.localidade+' , '+
    'UF: '+this.viaCepModel.uf+' , '+
    'ESTADO: '+this.viaCepModel.estado+' , '+
    'REGIÃO: '+this.viaCepModel.regiao+' , '+
    'IBGE: '+this.viaCepModel.ibge+' , '+
    'GIA: '+this.viaCepModel.gia+' , '+
    'DDD: '+this.viaCepModel.ddd+' , '+
    'SIAFI: '+this.viaCepModel.siafi;

      navigator.clipboard.writeText(textoParaCopiar);

    alert('texto copiado!');
  }

}
