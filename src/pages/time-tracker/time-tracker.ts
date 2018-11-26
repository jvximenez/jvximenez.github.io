import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TimeTrackerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-time-tracker',
  templateUrl: 'time-tracker.html',
})
export class TimeTrackerPage {
  tracker = {
    'dia':'',
    'mes':'',
    'ano':'',
    'total':'',
    'parcial':'',
    'title':'',
    'inicio':'',
    'fim':'',
    'nivel': 0,

  }

  public select

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.select =  [{title: "Ação"},
    {title: "Comédia"},
    {title: "Drama"},
    {title: "Romance"},
    {title: "Super-heroi"}]

    
  }

  Cor(n){
    if (n == -2){
      return 'dangerM'
    }
    if (n == -1){
      return 'danger'
    }
    if (n == 0){
      return 'dark'
    }
    if (n == 1){
      return 'primary'
    }
    if (n == 2){
      return 'primaryM'
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimeTrackerPage');
  }

}
