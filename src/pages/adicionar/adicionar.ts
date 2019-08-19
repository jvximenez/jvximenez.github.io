import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { ResumoSemanalPage } from '../resumo-semanal/resumo-semanal';


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

  public rows;DataO
  

  controle = { 
    'dia':'',
    'mes':'',
    'ano':'',
    'remedios':'',
    'dentes':'',
    'atividades':'',
    'passos':'0',
    'peso':'0',
    'andando':'0',
    'correndo':'0',
    'tempinho':'0',
    'tempinhoQ':'0',
    'UHU':'0',
    'cafe':'0',	
    'lancheM':'0',
    'almoco':'0',
    'lancheT':'0',
    'jantar':'0',
    'lancheN':'0',
    'doce':'0',
    'refrigerante':'0',
    'alcool':'0',
    
    'estudos':'',
    'tempoE':'0',
    'tempoA':'0',
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
  

  
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbService: FirebaseServiceProvider, private statusBar: StatusBar) {
    this.DataO = new Date().toISOString();
    
    this.statusBar.backgroundColorByHexString('#ffffff');

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
    this.MudandoData(this.DataO)
    this.dbService.save('diario',controle)
    this.navCtrl.push(ResumoSemanalPage)


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

  Total2(){
    var total;
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth();
    var ano = data.getFullYear();
    total = Number(ano*10000 + (mes+1)*100 + dia-1);
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

  Ontem(){
    var date = new Date
    date.setDate(date.getDate() - 1)
    this.DataO = date.toISOString()
    this.Criacao(this.controle)

    
  }

  atualiza(){
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }

  Mostra(){
    
    this.MudandoData(this.DataO)
  }

  MudandoData(valor){
    
    var fields = valor.split('-')
    var dia = fields[2].split('T')
    this.controle.dia = dia[0]
    this.controle.ano =  fields[0]
    this.controle.mes =  String(Number(fields[1]))
    this.controle.total =  String(Number(Number(this.controle.ano)*10000 + Number(this.controle.mes)*100 + Number(dia[0])));
    this.controle.parcial = String(Number(Number(this.controle.ano)*100 + Number(this.controle.mes)));
  }

  

  
}
