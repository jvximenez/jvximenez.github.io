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

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbService: FirebaseServiceProvider) {
    this.meses = this.Today();
    this.teste = (this.dbService.getAllEspecifico('diario','total','20181026'))
    this.controle = this.dbService.getAll('diario','total')
    this.heightt = "500px"

    this.controleArray = this.CriaArray()

    this.compras = this.dbService.getAll('compras','total')
    this.ComprasArray = this.arrayCompras(this.compras);
   
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
    
    if (tipo == "Numero")
      this.controleArray.forEach(itens => {itens.forEach(item =>{if (item['parcial'] == Parcial){contador += 1;
       valor += Number(item[parametro])
       }})})
       valor = valor/contador
      
      return(valor)
  }

  Arredonda(val,casas){
    var b;
    b = (Math.round(val*10**casas)/(10**casas))
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
    
    var teste1 = (total - 201810);
    
    if (teste1 > 15) {
      while (comeco <= 201812) {
        array.push(comeco)
        comeco += 1
     }
      comeco = 201901
      while (comeco <= total){
        array.push(comeco)
        comeco += 1
      }
    }

    if (teste1 < 100) {
      

      while (comeco <= total){

        array.push(comeco)
        comeco += 1
      }
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
