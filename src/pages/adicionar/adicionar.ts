import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdicionarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adicionar',
  templateUrl: 'adicionar.html',
})
export class AdicionarPage {

  remedios: any = []
  dentes: any = []
  atividades: any = []
  pessoas: any = []
  role: any = []
  outros: any = []
  estudos: any = []
  

  controle = { 
    'remedios': '',
    'dentes':  '',
    'atividades': '',
    'passos':'',
    'peso':'',
    'andando':'',
    'correndo':'',
    'tempinho':'',
    'UHU':'',
    'cafe':'',	
    'lancheM':'',
    'almoço':'',
    'lancheT':'',
    'jantar':'',
    'doce':'',
    'refrigerante':'',
    'alcool':'',
    'besteira':'',
    'Estudos':'',
    'TempoE':'',
    'TempoA':'',
    'Outros':'',
    'Role':'',
    'Pessoas':'',
    'resumo':'',

    

  }

  
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.remedios = [
      {title: "Homeopatia - manhã"},
      {title: "Homeopatia - noite"},
      {title: "Advil"},
      {title: "Vitamina C"},
      {title: "Vitamina D"},
      {title: "Antibiótico"},
      {title: "Antialergico"},
      {title: "Antiflamatório"},
      {title: "Creme"},
      {title: "Buscopan"},
      {title: "Eno"},
      {title: "Omeoprazol"},


    ]

    this.dentes = [
      {title: "Manhã"},
      {title: "Tarde"},
      {title: "Noite"},
      {title: "Outro"},
      {title: "Fio dental"},
      {title: "Aparelho"},
    ]

    this.atividades =[
      {title: "Corrida"},
      {title: "Caminhada"},
      {title: "Intervalado"},
      {title: "Abdominais"},
      {title: "Flexões"},
      {title: "Gêmeos"},
      {title: "Outro"},
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionarPage');
  }

}
