import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { ResumoSemanalPage } from '../resumo-semanal/resumo-semanal';
import  firebase  from 'firebase';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { ToastController } from 'ionic-angular'
import { runOutsideAngular } from 'angularfire2';


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
    'tempoTrab':'0',
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

  public Remedios;Roles;Estudos;Pessoas;Atividades;Dentes;
  public ArrayDeTrackers = [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  

  
  

  constructor(private toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams, public dbService: FirebaseServiceProvider, private statusBar: StatusBar) {
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

  VericaTrackers(){
    var numero = 50

    var totalReal;
    var data = new Date();
    var dia1 = data.getDate();
    var mes1 = data.getMonth();
    var ano1 = data.getFullYear();
    totalReal = Number(ano1*10000 + (mes1+1)*100 + dia1);

    


    console.log(this.DataO)
    var valor = this.DataO
    var fields = valor.split('-')
    var dia = fields[2].split('T')
    var dia = dia[0]
    var ano =  fields[0]
    var mes =  String(Number(fields[1]))
    var total =  String(Number(Number(ano)*10000 + Number(mes)*100 + Number(dia)));
    console.log(total)

    var diferenca = Number(totalReal) - Number(total)
    console.log(diferenca)
    if (diferenca <= 0){numero = 50}
    if (diferenca <= 2){numero = 150}
    if (diferenca <= 5){numero = 5*30}
    if (diferenca <= 10){numero = 10*30}
    if (diferenca <= 20){numero = 20*30}
    if (diferenca <= 31){numero = 31*30}
    if (diferenca <= 200){numero = 1000}
    if (diferenca > 200){numero = 10000}


    var trackersRef = firebase.database().ref('/trackers').limitToLast(numero).orderByChild("total")



    trackersRef.on('value', trackersList => {
      let trackers = [];
      trackersList.forEach(tracker => {
        
        var obj
        obj = tracker.val()
        obj.key = tracker.key

        if (String(obj['total']) == total ){

          trackers.push(obj);
          return false;
        };})
        trackers = trackers.reverse()
        var trackersArray = trackers;

        var array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        var Estudos = []
        var Aulas = []
        var Trabalho = []
        trackersArray.forEach(item => {
          if(item.title.includes("Dormir"))
          {array[0] += item.duracao}; 
          if(item.title.includes("Banho"))
          {array[1] += item.duracao};
          if(item.title.includes("Ler"))
          {array[2] += item.duracao};
          if(item.title.includes("Programar"))
          {array[3] += item.duracao};
          if(item.title.includes("Frances"))
          {array[4] += item.duracao};
          if(item.title.includes("Ingles"))
          {array[5] += item.duracao};
          if(item.title.includes("Aula"))
          {array[6] += item.duracao; Aulas.push(item.title)};
          if(item.title.includes("Relaxar"))
          {array[7] += item.duracao};
          if(item.title.includes("Tempinho"))
          {array[8] += item.duracao};
          if(item.title.includes("Dani"))
          {array[9] += item.duracao};
          if(item.title.includes("Estudar"))
          {array[10] += item.duracao; Estudos.push(item.title)};
          if(item.title.includes("Correr"))
          {array[11] += item.duracao};
          if(item.title.includes("Andar"))
          {array[12] += item.duracao}
          if(item.title.includes("Trabalhar"))
          {array[13] += item.duracao; Trabalho.push(item.title)};
        })
        
        var array2 = []
        array.forEach(a => {array2.push(Math.round(a*100)/100)})
        array = array2
        this.ArrayDeTrackers = array
        
        var texto = ("Dia: "+dia+"/"+mes+"\n Tempinho: "+array[8]+"\n Ler: "+array[1]+"\n  Programar: "+array[3]+
        "\n  Aula: "+array[6]+"\n Estudar mesmo: "+array[10]+
        "\n Estudar Total: "+String(Number(array[10])+Number(array[3])+Number(array[1]))+
        "\n"+Estudos+"\n"+Aulas)
        let toast = this.toastCtrl.create({
        message: texto,
        duration: 8000
        });
        toast.present();
     

     
  })}

  

  
}
