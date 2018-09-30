import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdicionarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adicionar',
  templateUrl: 'adicionar.html',
})
export class AdicionarPage {

  remedios: any = []

  controle = { 
    'remedios': '',

  }

  
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.remedios = [
      {title: "teste"},
      {title: "teste"},
      {title: "teste"},

    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionarPage');
  }

}
