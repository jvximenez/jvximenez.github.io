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
  estudos: any = []

  public rows;
  

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
    'almoco':'',
    'lancheT':'',
    'jantar':'',
    'doce':'',
    'refrigerante':'',
    'alcool':'',
    'besteira':'',
    'estudos':'',
    'tempoE':'',
    'TempoA':'',
    'Role':'',
    'Pessoas':'',
    'resumo':'',
    'barba':'',
    'agradecimento':'',
    'meditacao':'',
    'escrever':'',
    'raser':'',
    'leitura':'',


    

  }

  
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rows = 5;
    
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

    this.estudos = [
      {title: "Frances"},
      {title: "Ingles"},
      {title: "Outro"},
    ]

    this.pessoas = [
      {title: "Dani"},
      {title: "Amanda"},
      {title: "Luma"},
      {title: "India"},
      {title: "Filippo"},
      {title: "Marina"},
      {title: "Marianinha"},
      {title: "Outro"},      
    ]

    this.role = [
      {title: "Pizza"},
      {title: "Mcdonalds"},
      {title: "Burger King"},
      {title: "Hamburguer"},
      {title: "Aniversário"},
      {title: "Bar"},
      {title: "Churrasco"},
      {title: "Dani"},
      {title: "Japones"},
      {title: "Balada"},
      {title: "Festa"},
      {title: "Turistar"},
      {title: "Viajar"},
      {title: "Outro"},
    ]
    
  }

  
  roww(){
    this.rows = 5;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionarPage');
  }

}
