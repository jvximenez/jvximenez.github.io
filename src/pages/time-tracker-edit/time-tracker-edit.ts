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
    tarefa.Hfim = Number(tarefa.Hfim)
    tarefa.Hinicio = Number(tarefa.Hinicio)
    tarefa.Mfim = Number(tarefa.Mfim)
    tarefa.Minicio = Number(tarefa.Minicio)
    this.dbService.update('trackers',tarefa).then( d => {
      this.navCtrl.pop()});
  }

  Finalizar(tracker){
    tracker.duracao = (Math.round((Number(tracker.Hfim) + Math.round((Number(tracker.Mfim)/60)*10000)/10000 - Number(tracker.Hinicio) - Math.round((Number(tracker.Minicio)/60)*10000)/10000)*10000)/10000)
    this.Atualizar(tracker)

  }
  

  Deletar(tarefa){
    this.dbService.revome('trackers',tarefa).then( d => {
      this.navCtrl.pop()
    });
    }

}
