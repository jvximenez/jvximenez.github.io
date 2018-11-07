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

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbService: FirebaseServiceProvider) {
    this.meses = this.Today();
    this.teste = (this.dbService.getAllEspecifico('diario','total','20181026'))
    this.controle = this.dbService.getAll('diario','total')
    this.heightt = "500px"
   
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
    var final = [datinha2,datinha].join('/')  
    return final
  }

  goToMes(itens){
      this.navCtrl.push(CardsDoMesPage, 
      {'mes' : itens});
    
  }

  

}
