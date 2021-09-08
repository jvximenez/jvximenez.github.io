import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { EdicaoPage } from '../edicao/edicao';

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
    this.itens = [{title:"Leitura"},{title:"Corrida"},{title:"8000"},{title:"Aula"},{title:"Agradecer"},
    {title:"Meditar"},{title:"Peso"},{title:"Passos"}
    ]
      
    
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad AnalisePage');
  }

  GoEdicao(single){
    this.navCtrl.push(EdicaoPage, 
      {'single' : single});
    }

  icon(dado){
    if (dado == true){
      return("checkmark-circle")
    }
    else {return("close-circle")}
  }

  iconColor(dado){
    if (dado == true){
      return("primary")
    }
    else {return("dark")}
  }

  contem(dado,parametro){
    if(dado.includes(parametro) == true){
      return("checkmark-circle")
    }
    else {return("close-circle")}
  }

  contemCor(dado,parametro){
    if(dado.includes(parametro) == true){
      return("primary")
    }
    else {return("dark")}
  }

  contador(dado,parametro){
    if(Number(dado) > parametro){
      return("checkmark-circle")
    }
    else {return("close-circle")}
  }

  contadorCor(dado,parametro){
    if(Number(dado) > parametro){
      return("primary")
    }
    else {return("dark")}
  }

  ChecaDia(dia,mes,ano){
    
  var myDate = new Date();
  myDate.setFullYear(Number(ano));
  myDate.setMonth(Number(mes)-1);
  myDate.setDate(Number(dia));  
  if(myDate.getDay() == 6){return true}
  else{return false}
  }

}
