import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbService: FirebaseServiceProvider) {
    this.meses = this.Today();
    this.teste = (this.dbService.getAllEspecifico('diario','total','20181026'))
    this.controle = this.dbService.getAll('diario','total')
   
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
    console.log("entrou")
    var total;
    var array = [];
    var data = new Date();
    var mes = data.getMonth();
    var ano = data.getFullYear();
    total = Number(ano*100 + (mes+1));
    var comeco = 201810;
    var teste1 = (total - 201810);
    if (teste1 > 100) {
      while (comeco <= 201812) {
        array.push(comeco)
        comeco += 1
      console.log("+1")}
      comeco = 201901
      while (comeco <= total){
        array.push(comeco)
        comeco += 1
      }
    }

    if (teste1 < 100) {
      console.log("entrou2")
      while (comeco <= total){
        console.log(comeco,total,"comeco e total")
        array.push(comeco)
        comeco += 1
      }
    }
    console.log(array,"l")
    return array
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardsPage');
  }


  Mes(){
    return (this.dbService.getAllEspecifico('diario','total','20181026'))
  }

}
