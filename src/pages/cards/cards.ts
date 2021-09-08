import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { CardsDoMesPage } from '../cards-do-mes/cards-do-mes';

/**
 * Generated class for the CardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html',
})
export class CardsPage {

  public meses: any
  public teste: any
  public controle: any
  public heightt: any
  public gastos: any
  controleArray = []

  public compras;ComprasArray
  public ArrayCompleto; totais

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbService: FirebaseServiceProvider) {
    this.meses = this.Today();
    this.teste = (this.dbService.getAllEspecifico('diario','total','20181026'))
    this.controle = this.dbService.getAll('diario','total')
    this.heightt = "500px"

    this.controleArray = this.CriaArray()

    this.compras = this.dbService.getAll('compras','total')
    this.ComprasArray = this.arrayCompras(this.compras);
    this.ArrayCompleto = this.CriaArrayCompleto

    this.totais =[
      {title:"itens",parametro:"passos",tipo:'Numero',arredonda:'0',nome:'Passos',extra:'',quero:"maior"},
      {title:"itens",parametro:"peso",tipo:'Numero',arredonda:'1',nome:'Peso',extra:'kg'},
      {title:"itens",parametro:"tempinho",tipo:'Numero0',arredonda:'1',nome:'Tempo',extra:'m',quero:"maior"},
      {title:"itens",parametro:"tempinhoQ",tipo:'Numero',arredonda:'1',nome:'Quant',extra:''},

      {title:"itens",parametro:"UHU",tipo:'Numero',arredonda:'1',nome:'Uhu',extra:'',quero:"maior"},
      {title:"itens",parametro:"cafe",tipo:'Numero',arredonda:'2',nome:'Cafe',extra:''},
      {title:"itens",parametro:"almoco",tipo:'Numero',arredonda:'2',nome:'Almoco',extra:''},
      {title:"itens",parametro:"jantar",tipo:'Numero',arredonda:'2',nome:'Jantar',extra:''},
      {title:"itens",parametro:"leitura",tipo:'TorF',arredonda:'0',nome:'Ler',extra:'%',quero:"maior"},

      {title:"itens",parametro:"refrigerante",tipo:'TorFNumber',arredonda:'0',nome:'Refri',extra:'%'},
      {title:"itens",parametro:"alcool",tipo:'TorFNumber',arredonda:'0',nome:'Alcool',extra:'%'},
      {title:"itens",parametro:"alcool",tipo:'TorFNumber',arredonda:'0',nome:'Correr',extra:'%'},
      {title:"itens",parametro:"agradecimento",tipo:'TorF',arredonda:'0',nome:'Agrad.',extra:'%',quero:"maior"},
      {title:"itens",parametro:"tempoA",tipo:'Numero',arredonda:'2',nome:'Aula',extra:'h',quero:"maior"},
      {title:"itens",parametro:"tempoE",tipo:'Numero',arredonda:'2',nome:'Estudo',extra:'h',quero:"maior"},
      {title:"itens",parametro:"tempoTrab",tipo:'Numero',arredonda:'2',nome:'Trabalho',extra:'h',quero:"maior"},
    ]
   
  }

  CriaArrayCompleto(){
    var array = []
    this.controle.forEach(itens => itens.forEach(item => {array.push(item)   
    }))
  }

  CriaArray(){
    var array = []
    this.controle.forEach(element => { array.push(element)
      
    });
    return array
  }

  RetornaMedia(Parcial,parametro,tipo){
    var valor = 0
    var contador = 0
    
    if (tipo == "Numero"){
      this.controleArray.forEach(itens => {itens.forEach(item =>{if (item['parcial'] == Parcial){contador += 1;
       valor += Number(item[parametro]) 
       }})})
       valor = valor/contador
       if(isNaN(valor)==true){
         valor = 0
        return("-")
      }
      return(valor)}

    if (tipo == "Numero0"){
    this.controleArray.forEach(itens => {itens.forEach(item =>{if (item['parcial'] == Parcial && item[parametro] !='0'){contador += 1;
      valor += Number(item[parametro]/item['tempinhoQ'])
      }})})
      valor = valor/contador
      if(isNaN(valor)){
        return("-")
      }
    return(valor)}

    if (tipo == "TorF"){
      this.controleArray.forEach(itens => {itens.forEach(item =>{if (item['parcial'] == Parcial){contador += 1; if(item[parametro] == true){
        valor += 1
      }
        
        }})})
        valor = valor*100/contador
      
      return(valor)}

      
    if (tipo == "TorFNumber"){
      this.controleArray.forEach(itens => {itens.forEach(item =>{if (item['parcial'] == Parcial){contador += 1; if(item[parametro] >0){
        valor += 1
      }
        
        }})})
        valor = valor*100/contador
      
      return(valor)}
  }


  RetornaMediaTotal(Parcial,parametro,tipo){
    var valor = 0
    var contador = 0
    
    if (tipo == "Numero"){
      this.controleArray.forEach(itens => {itens.forEach(item =>{contador += 1;
       valor += Number(item[parametro]) 
       })})
       valor = valor/contador
      
      return(valor)}

    if (tipo == "Numero0"){
    this.controleArray.forEach(itens => {itens.forEach(item =>{if (item[parametro] !='0'){contador += 1;
      valor += Number(item[parametro])
      }})})
      valor = valor/contador
    
    return(valor)}

    if (tipo == "TorF"){
      this.controleArray.forEach(itens => {itens.forEach(item =>{contador += 1; if(item[parametro] == true){
        valor += 1
      }
        
        })})
        valor = valor*100/contador
      
      return(valor)}

      
    if (tipo == "TorFNumber"){
      this.controleArray.forEach(itens => {itens.forEach(item =>{contador += 1; if(item[parametro] >0){
        valor += 1
      }
        
        })})
        valor = valor*100/contador
      
      return(valor)}
  }

  VerificaMelhor(title,parametro,tipo,condicao){
    var mes = this.RetornaMedia(title,parametro,tipo)
    var total = this.RetornaMediaTotal(title,parametro,tipo)
    var resultado =  total - Number(mes)
    if (resultado < 0){
      if (condicao == 'maior'){
        return ('arrow-round-up')
      }
      else {return ("arrow-round-down")}
    }
    if (resultado > 0){
      if (condicao == 'menor'){
        return ('arrow-round-up')
      }
      else {return ("arrow-round-down")}
    }

  }

  Arredonda(val,casas){
    if(isNaN(val))
    var b;
    b = (Math.round(val*10**casas)/(10**casas))
    if(isNaN(b)==true){
      b = "- "
    }
    return b
  }

  Sinal(termo){
    if (termo == true) { return "✔"};
    if (termo == false) { return "✘"}
    
  }

  Termos(termo){
    var valor = ("termo".match(/,/g)||[]).length
    return valor;
  }

  Today(){
    
    var total;
    var array = [];
    var data = new Date();
    var mes = data.getMonth();
    var ano = data.getFullYear();
    total = Number(ano*100 + (mes+1));
    var comeco = 201810;
    var ano1 = 2018
    var mes1 = 10
    
    array.push(comeco)
    while (comeco < total) {
      mes1 = mes1 +1
      if (mes1 == 13){
        ano1 = ano1 + 1
        mes1 = 1
      }
      comeco = Number(ano1*100 + (mes1));
      array.push(comeco)

    }
    

    array = array.reverse()
    return array
  }




  Mes(){
    return (this.dbService.getAllEspecifico('diario','total','20181026'))
  }

  RetornaData(data){
    data = String(data)
    var datinha = data.substr(0,4);
    var datinha2 = data.substr(4,2);
    if ( datinha2 == 1) { datinha2 = "Janeiro"}
    if ( datinha2 == 2) { datinha2 = "Fevereiro"}
    if ( datinha2 == 3) { datinha2 = "Março"}
    if ( datinha2 == 4) { datinha2 = "Abril"}
    if ( datinha2 == 5) { datinha2 = "Maio"}
    if ( datinha2 == 6) { datinha2 = "Junho"}
    if ( datinha2 == 7) { datinha2 = "Julho"}
    if ( datinha2 == 8) { datinha2 = "Agosto"}
    if ( datinha2 == 9) { datinha2 = "Setembro"}
    if ( datinha2 == 10) { datinha2 = "Outubro"}
    if ( datinha2 == 11) { datinha2 = "Novembro"}
    if ( datinha2 == 12) { datinha2 = "Dezembro"}

    var final = [datinha,datinha2].join(' - ')  
    return final
  }

  goToMes(itens){
      this.navCtrl.push(CardsDoMesPage, 
      {'mes' : itens,
      'gastos': this.ComprasArray})}
    
  


  arrayCompras(compras){
    let array = []
    let linha = []
    compras.forEach( itens => itens.forEach(item => {linha = [], linha.push(item.payload,item.title,item.categoria,item.pagamento,item.total), array.push(linha)}))
    return (array)
  }

  

}
