import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConfiguracoesEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configuracoes-edit',
  templateUrl: 'configuracoes-edit.html',
})
export class ConfiguracoesEditPage {

  public edits

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.edits = this.navParams.get('edicao')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracoesEditPage');
  }

}
