import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
/**
 * Generated class for the HojePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hoje',
  templateUrl: 'hoje.html',
})
export class HojePage {

  today: any;
  public controleHoje;
  public visual;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbService: FirebaseServiceProvider) {
  this.today = this.Total();
  this.controleHoje = this.dbService.getAll('diario','total')
  this.controleHoje = this.dbService.getAll2('compras').map(a => a.reverse());
  console.log(this.controleHoje)
  this.visual = this.dbService.getAll2('visual')
  console.log(this.visual)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HojePage');
  }

  Total(){
    var total;
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth();
    var ano = data.getFullYear();
    var hora = data.getHours();
    var min = data.getMinutes();
    total = Number(ano*10000 + (mes+1)*100 + dia);
    return total
  
  }

}
