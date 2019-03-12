import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';

/**
 * Generated class for the AnalisePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-analise',
  templateUrl: 'analise.html',
})
export class AnalisePage {
  
  public Dados
  public itens

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbService: FirebaseServiceProvider) {
  
    this.Dados = this.dbService.getAll('diario','parcial').map(a => a.reverse()).map(a => a.sort(function(a, b) {return Number(String(b['total']- Number(String(a['total']))))}))
    this.itens = [{title:"dia"},{title:"ler"},{title:"Agradecer"},
    {title:"Meditar"},{title:"Correr"},{title:"Agradecer"}
    ]
      
    
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad AnalisePage');
  }

  icon(leitura){
    if (leitura == true){
      return("checkmark-circle")
    }
    else {return("close-circle")}
  }

  iconColor(leitura){
    if (leitura == true){
      return("primary")
    }
    else {return("dark")}
  }

}
