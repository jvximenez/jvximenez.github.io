import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';

/**
 * Generated class for the EdicaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edicao',
  templateUrl: 'edicao.html',
})
export class EdicaoPage {
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
    'lancheN':'',
    'doce':'',
    'refrigerante':'',
    'alcool':'',
    
    'estudos':'',
    'tempoE':'',
    'tempoA':'',
    'tempoTrab':'',
    'role':'',
    'pessoas':'',
    'resumo':'',
    'viagemLugar':'',
    'barba': false,
    'agradecimento':false,
    'meditacao': false,
    'escrever':false,
    'raser':false,
    'leitura':false,
    'besteira':false,
    'viagem':false,
    'exercicios':false,
    'total':'',
    'parcial':'',
  }

  public Remedios;Roles;Estudos;Pessoas;Atividades;Dentes

  

  constructor(public navCtrl: NavController, public navParams: NavParams,  public dbService: FirebaseServiceProvider) {
    this.controle = this.navParams.get('single')
    
    this.rows = 5;

    this.rows = 5;

    this.Remedios=this.dbService.getAll('configuracoes/remedios','ordem')
    this.Atividades=this.dbService.getAll('configuracoes/atividades','ordem')
    this.Roles=this.dbService.getAll('configuracoes/roles','ordem')
    this.Estudos=this.dbService.getAll('configuracoes/estudos','ordem')
    this.Pessoas=this.dbService.getAll('configuracoes/pessoas','ordem')
    this.Dentes=this.dbService.getAll('configuracoes/dentes','ordem')
    
    
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
      {title: ""}


    ]

    

    this.dentes = [
      {title: "Manhã"},
      {title: "Tarde"},
      {title: "Noite"},
      {title: "Outro"},
      {title: "Fio dental"},
      {title: "Aparelho"},
      {title: ""}
    ]

    this.atividades =[
      {title: "Corrida"},
      {title: "Caminhada"},
      {title: "Intervalado"},
      {title: "Abdominais"},
      {title: "Flexões"},
      {title: "Gêmeos"},
      {title: "Outro"},
      {title: ""}
      
    ]

    this.estudos = [
      {title: "Frances"},
      {title: "Ingles"},
      {title: "Projet Constru"},
      {title: "Programação"},
      {title: "Outro"},
      {title: ""}
      
    ]

    this.pessoas = [
      {title: "Dani"},
      {title: "Amanda"},
      {title: "Luma"},
      {title: "India"},
      {title: "Filippo"},
      {title: "Marina"},
      {title: "Marianinha"},
      {title: "Pai"},
      {title: "Mãe"},
      {title: "Felipe"},
      {title: "Sttefany"},
      {title: "Bella"},
      {title: "Outro"},
      {title: ""}      
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
      {title: ""}
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
    this.controle.total = String(this.Total());
    this.controle.parcial =  String(this.Parcial());
    this.dbService.save('diario',controle)


  }

  Total(){
    var total;
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth();
    var ano = data.getFullYear();
    total = Number(ano*10000 + (mes+1)*100 + dia);
    return total
  
  }

  Parcial(){
    var total;
    var data = new Date();
    var mes = data.getMonth();
    var ano = data.getFullYear();
    total = Number(ano*100 + (mes+1));
    return total

  }

  Atualizar(controle){
    this.dbService.update('diario',controle).then( d => {
      this.navCtrl.pop()});
    }
  

  Deletar(controle){
    this.dbService.revome('diario',controle).then( d => {
      this.navCtrl.pop()
    });
    }

}
