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
    this.dias = this.dbService.getAllEspecifico('diario','especifico',this.mes)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardsDoMesPage');
  }

}
