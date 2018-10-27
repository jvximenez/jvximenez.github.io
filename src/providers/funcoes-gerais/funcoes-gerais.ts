import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the FuncoesGeraisProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FuncoesGeraisProvider {

  constructor(public http: HttpClient) {
    console.log('Hello FuncoesGeraisProvider Provider');
  }

  Total(){
    var total;
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth();
    var ano = data.getFullYear();
    total = Number(ano*10000 + (mes+1)*100 + dia);
    total = String(total)
    return total
  
  }

  Parcial(){
    var total;
    var data = new Date();
    var mes = data.getMonth();
    var ano = data.getFullYear();
    total = Number(ano*100 + (mes+1));
    total = String(total)
    return total
  
  }

  FormataParcial(data){
    data = String(data)
    var datinha = data.substr(0,4);
    var datinha2 = data.substr(4,2);
    var final = [datinha2,datinha].join('/')
    console.log(final)
    return final

  }

  FormataTotal(data){
    data = String(data)
    var datinha = data.substr(0,4);
    var datinha2 = data.substr(4,2);
    var datinha3 = data.substr(6,2)
    var final = [datinha3,datinha2,datinha].join('/')
    console.log(final)
    return final

  }

  

}
