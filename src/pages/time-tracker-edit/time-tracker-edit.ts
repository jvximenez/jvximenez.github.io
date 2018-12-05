import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';

/**
 * Generated class for the TimeTrackerEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-time-tracker-edit',
  templateUrl: 'time-tracker-edit.html',
})
export class TimeTrackerEditPage {
  public tracker

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbService: FirebaseServiceProvider) {
  

    this.tracker = this.navParams.get('tracker')
  }

  Atualizar(tarefa){
    this.dbService.update('trackers',tarefa).then( d => {
      this.navCtrl.pop()});
    }
  

  Deletar(tarefa){
    this.dbService.revome('trackers',tarefa).then( d => {
      this.navCtrl.pop()
    });
    }

}
