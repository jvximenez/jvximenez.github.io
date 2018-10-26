import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';


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
    'dia':'',
    'mes':'',
    'ano':'',
    'remedios':'',
    'dentes':'',
    'atividades':'',
    'passos':'',
    'peso':'',
    'andando':'',
    'correndo':'',
    'tempinho':'',
    'tempinhoQ':'',
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
    'tempoA':'',
    'role':'',
    'pessoas':'',
    'resumo':'',
    'barba': false,
    'agradecimento':false,
    'meditacao': false,
    'escrever':false,
    'raser':false,
    'leitura':false,
    'total':'',


    

  }

  
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbService: FirebaseServiceProvider) {
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

  Data(){
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();
    var array = [dia,mes,ano];
    return array
    
  }

  Criacao(controle){
    var array = this.Data();
    this.controle.dia = String(array[0]);
    this.controle.mes = String(array[1]);
    this.controle.ano = String(array[2]);
    this.controle.total = String(this.Total())
    this.dbService.save('diario',controle)


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
