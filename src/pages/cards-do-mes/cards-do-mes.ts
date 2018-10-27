import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { EdicaoPage } from '../edicao/edicao';


/**
 * Generated class for the CardsDoMesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cards-do-mes',
  templateUrl: 'cards-do-mes.html',
})
export class CardsDoMesPage {
  public mes: any
  public dias: any
  public verdade: boolean

  public teste
  public passos;tempinho;quantidade;UHU;cafe;lancheM;almoco;lancheT;jantar
 

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbService: FirebaseServiceProvider) {
    this.mes = this.navParams.get('mes');
    this.verdade = true;

    this.dias = this.dbService.getAllEspecifico('diario','parcial',String(this.mes)).map(a => a.reverse());

    this.passos = this.Media("passos");
    this.tempinho = this.Media("tempinho");
    this.quantidade =this.Media("tempinhoQ");
    this.UHU = this.Media("UHU");
    this.cafe = this.Media("cafe");
    this.lancheM = this.Media("lancheM");
    this.almoco = this.Media("almoco");
    this.lancheT = this.Media("lancheT");
    this.jantar = this.Media("jantar");


    

    
  }

  FormataParcial2(data){
    data = String(data)
    var datinha = data.substr(0,4);
    var datinha2 = data.substr(4,2);
    var final = [datinha2,datinha].join('/')
    return final

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


  Media(dado){
    let soma = 0
    let quantidade = 0
    let array: number[] = []
    let final : number;
    this.dias.forEach(element => {element.forEach(dia => {console.log(dia),quantidade += 1 ,  soma += Number(dia[dado]), console.log(soma, quantidade) }),
    console.log("final", quantidade,soma),
    final = Number(soma)/Number(quantidade),
    final =  Math.round(final)
    console.log("final2", final), array.push(final)})
    console.log("final3",array)
    return array;
  }

  




 

}
