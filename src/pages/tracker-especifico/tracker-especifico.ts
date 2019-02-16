import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TrackerEspecificoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tracker-especifico',
  templateUrl: 'tracker-especifico.html',
})
export class TrackerEspecificoPage {
  public total
  public trackers

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.total = this.navParams.get('total')
    this.trackers =  this.navParams.get('trackers')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrackerEspecificoPage');
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
    if (n == 3){
      return 'verde'
    }
  }

  Icone(track){
    if(track.Minicio != '' && track.Mfim !=''){
      return('checkmark-circle-outline')
    }
   if(track.Minicio == ''){
        return('play'); 
      }
    if(track.Minicio != '' && track.Mfim ==''){
      return('pause')
    }
  }

  RetornaH(duracao){
    if (duracao == 0){
      return (" ")
    }
    else{
    var min2
    var inteiro = parseInt(duracao)
    var min = Math.round((duracao - inteiro)*60)
    min2 = String(min)
    if (min < 10) {min2 = String("0"+min)}
    return (inteiro+"h"+min2)}
  }

  
  

}
