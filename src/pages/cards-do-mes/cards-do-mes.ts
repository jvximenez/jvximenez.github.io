import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';


/**
 * Generated class for the CardsDoMesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cards-do-mes',
  templateUrl: 'cards-do-mes.html',
})
export class CardsDoMesPage {
  public mes: any
  public dias: any

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbService: FirebaseServiceProvider) {
    this.mes = this.navParams.get('mes');

    this.dias = this.dbService.getAllEspecifico('diario','parcial',String(this.mes))
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardsDoMesPage');
  }

  FormataParcial2(data){
    data = String(data)
    var datinha = data.substr(0,4);
    var datinha2 = data.substr(4,2);
    var final = [datinha2,datinha].join('/')
    console.log(final)
    return final

  }

  Sinal(termo){
    if (termo == true) { return "✔"};
    if (termo == false) { return "✘"}
    
  }

  Termos(termo){
    var valor = ("termo".match(/,/g)||[]).length
    return valor;
  }

}
