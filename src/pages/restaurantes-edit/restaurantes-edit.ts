import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';

/**
 * Generated class for the RestaurantesEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurantes-edit',
  templateUrl: 'restaurantes-edit.html',
})
export class RestaurantesEditPage {
  public restaurante :any
  public restaurantes;
  public tipos; Pessoas
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbService: FirebaseServiceProvider) {
    this.restaurante = this.navParams.get('restaurante')
    this.Pessoas=this.dbService.getAll('configuracoes/pessoas','ordem')
    this.restaurantes =  this.navParams.get('restaurantes')
    this.tipos = this.navParams.get('tipos')
  }


  Atualizar(tarefa){
    this.dbService.update('restaurantes',tarefa).then( d => {
      this.navCtrl.pop()});
    }
  

  Deletar(tarefa){
    this.dbService.revome('restaurantes',tarefa).then( d => {
      this.navCtrl.pop()
  });
  }

}
