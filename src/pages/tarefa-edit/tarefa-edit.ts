import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';

/**
 * Generated class for the TarefaEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tarefa-edit',
  templateUrl: 'tarefa-edit.html',
})
export class TarefaEditPage {

  public tarefa

  constructor(public navCtrl: NavController, public navParams: NavParams,  public dbService: FirebaseServiceProvider) {
    this.tarefa = this.navParams.get('tarefa')
  }

  

  Atualizar(tarefa){
    this.dbService.update('tarefas',tarefa).then( d => {
      this.navCtrl.pop()});
    }
  

  Deletar(tarefa){
    this.dbService.revome('tarefas',tarefa).then( d => {
      this.navCtrl.pop()
    });
    }

}
