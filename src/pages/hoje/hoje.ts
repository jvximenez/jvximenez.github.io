import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { EdicaoPage } from '../edicao/edicao';




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
  public testeee;
  public controleHoje;
  public controle
  public today;
  public controleOntem;

  

  constructor(public navCtrl: NavController, public dbService: FirebaseServiceProvider) {
    this.today = this.Total();
    this.controleHoje=  this.dbService.getAllEspecifico('diario','total',this.today).map(a => a.reverse());
    this.controleOntem = this.dbService.getAllEspecifico('diario','total',(String(Number(this.today -1 )))).map(a => a.reverse());
    
  }

  Total(){
    var total;
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth();
    var ano = data.getFullYear();
    total = Number(ano*10000 + (mes+1)*100 + dia);
    total = String(total)
    return total
  
  }

  Sinal(termo){
    if (termo == true) { return "✔"};
    if (termo == false) { return "✘"}
    
  }

  Termos(termo){
    var valor = ("termo".match(/,/g)||[]).length
    return valor;
  }

  GoEdicao(single){
    this.navCtrl.push(EdicaoPage, 
      {'single' : single});
    
  }

}
