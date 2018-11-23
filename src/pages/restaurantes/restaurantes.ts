import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RestaurantesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurantes',
  templateUrl: 'restaurantes.html',
})
export class RestaurantesPage {

  public show = true

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  AtualizarP(){
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }


  Show(){
    this.show = !this.show;
    return (this.show)
  }
}
