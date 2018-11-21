import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VinhoEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vinho-edit',
  templateUrl: 'vinho-edit.html',
})
export class VinhoEditPage {

  public vinho
  public pais; vinhos
  public Uvas; Tipo

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.vinho = this.navParams.get('vinho')

    this.Uvas = [
      {'title':"Terroir"},
      {'title':"Cabernet Syrah"},
      {'title':"Cabernet Souvignon"},
      {'title':"Merlot"},
      {'title':"Malbec"},
      {'title':"Camérnère"},
      {'title':"Pinot Noir"},
      {'title':"Chardonnay"},
      {'title':"Sauvignon Blanc"},
      {'title':""},
  
    ]
  
    this.pais = [
      {'title':"França"},
      {'title':"Italia"},
      {'title':"Espanha"},
      {'title':"Portugal"},
      {'title':"Chile"},
      {'title':"Brasil"},
      {'title':""},
  
    ]
  
    this.Tipo = [
      {'title':"Branco"},
      {'title':"Tinto"},
      {'title':"Rose"},
      {'title':"Espumante"},
      {'title':"Doce"},
      {'title':""},
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VinhoEditPage');
  }

}
