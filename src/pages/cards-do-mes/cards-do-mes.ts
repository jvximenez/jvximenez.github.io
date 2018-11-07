import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { EdicaoPage } from '../edicao/edicao';
import chartJs from 'chart.js';


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
  @ViewChild('barCanvas') barCanvas;
  barChart: any;
  @ViewChild('pieCanvas') pieCanvas;
  pieChart: any;
  @ViewChild('barCanvas2') barCanvas2;
  bar2Chart: any;

  public mes: any
  public dias: any
  public dias2: any
  public verdade: boolean

  public teste
  public passos;tempinho;quantidade;UHU;cafe;lancheM;almoco;lancheT;jantar;estudos;aulas
  public refrigerante; alcool;leitura;agradecimento

  public graficoG;graficoData;graficoDado
  public graficoCafeG;graficoCafeData;graficoCafeDado
  public graficoLancheMG;graficoLancheMData;graficoLancheMDado

  public graficoAlmocoData;graficoLancheTData;graficoJantarData;graficoLancheNData

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbService: FirebaseServiceProvider) {

    

    this.mes = this.navParams.get('mes');
    this.verdade = true;
    if(this.mes != "total"){
      this.dias = this.dbService.getAllEspecifico('diario','parcial',String(this.mes)).map(a => a.reverse());
    }
    if(this.mes == "total"){
      this.dias = this.dbService.getAll('diario','parcial').map(a => a.reverse());
    }
   
    this.dias2 = this.dias.map(a => a.reverse());

    this.graficoG = this.Media2('passos');
    this.graficoData = this.graficoG[0];
    this.graficoDado = this.graficoG[1];

    this.graficoCafeG = this.Media2('cafe');
    this.graficoCafeData = this.graficoCafeG[0];
    this.graficoCafeDado = this.graficoCafeG[1];

    this.graficoLancheMG = this.Media2('lancheM');
    this.graficoLancheMData = this.graficoLancheMG[0];
    this.graficoLancheMDado = this.graficoLancheMG[1];

    this.graficoLancheMG = this.Media2('almoco');
    this.graficoAlmocoData = this.graficoLancheMG[0];
    
    this.graficoLancheMG = this.Media2('lancheT');
    this.graficoLancheTData = this.graficoLancheMG[0];

    this.graficoLancheMG = this.Media2('jantar');
    this.graficoJantarData = this.graficoLancheMG[0];

    this.graficoLancheMG = this.Media2('lancheN');
    this.graficoLancheNData = this.graficoLancheMG[0];


   
    console.log("aqui",this.graficoCafeG,this.graficoDado,this.graficoData)

    this.passos = this.Media("passos");
    this.tempinho = this.Media("tempinho");
    this.quantidade =this.Media("tempinhoQ");
    this.UHU = this.Media("UHU");
    this.cafe = this.Media("cafe");
    this.lancheM = this.Media("lancheM");
    this.almoco = this.Media("almoco");
    this.lancheT = this.Media("lancheT");
    this.jantar = this.Media("jantar");
    this.estudos = this.Media("tempoE");
    this.aulas = this.Media("tempoA");
    
    
    this.refrigerante = this.SeHouve('refrigerante')
    this.alcool = this.SeHouve('alcool')
    this.leitura = this.SeHouve('leitura')
    this.agradecimento = this.SeHouve('agradecimento')
   
    
    


    

    
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


  Media2(dado){
    let array = []
    let array2 = []
    let array3 = []
    let final : number;
    this.dias2.forEach(element => {element.forEach(dia => {(array).push(Number(dia[dado])), (array2).push(Number(dia['dia']))})
    console.log(array, array2)})
    array3 = [array,array2]
    console.log("3", array3)
    return array3
  }

  Media(dado){
    let soma = 0
    let quantidade = 0
    let array: number[] = []
    let final : number;
    this.dias2.forEach(element => {element.forEach(dia => {quantidade += 1 ,  soma += Number(dia[dado]) }),
    final = Number(soma)/Number(quantidade),
    final =  parseFloat(final.toFixed(1))
    
    array.push(final)})
    return array;
  }

  SeHouve(dado){
    let soma = 0
    let quantidade = 0
    let array: number[] = []
    let final : number;
    this.dias2.forEach(element => {element.forEach(dia => {quantidade += 1 ; if (dia[dado] > 0 || dia[dado] == true)  {soma += 1} }),
    
    final = (Number(soma)/Number(quantidade))*100,
    final =  Math.round(final)
    array.push(final)})
    
    return array;

  }

  //--------------------CHarts-------------------------------//

  ngAfterViewInit(){
    setTimeout(()=> {
      this.barChart = this.getBarChart();
      this.bar2Chart = this.getBarChart2();
      
    },250)

    setTimeout(()=> {
      
    },100)
}

    getBarChart(){
      const data = {
        labels: this.graficoDado,
        datasets: [{
          label: ['Passos'],
          data: this.graficoData,
          backgroundColor:  '#2f6acf',
          borderWidth: 2
      }]
    
    };
  
    const options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            autoSkip: false,
          }
        }],
        xAxes: [{
          ticks: {
            autoSkip: false,
          }
  
        }]
      }
    }
    
  
    return this.getChart(this.barCanvas.nativeElement, 'bar', data, options);


    
  }
  
    getChart(context, charType, data, options){
      return new chartJs(context, {
        data,
        options,
        type: charType
      })
    }

    getBarChart2(){
      const data = {
        labels: this.graficoCafeDado,
        datasets: [{
          label: ['Café'],
          data: this.graficoCafeData,
          backgroundColor:  '#2f6acf',
          borderWidth: 2
      },{
        label: ['LancheM'],
        data: this.graficoLancheMData,
        backgroundColor: "#6892da",
        borderWidth: 2
      },{
        label: ['Almoco'],
        data: this.graficoAlmocoData,
        backgroundColor: '#85a6e0',
        borderWidth: 2
      },{
        label: ['Lanche T'],
        data: this.graficoLancheTData,
        backgroundColor: '#a1bbe6',
        borderWidth: 2
      },{
        label: ['Jantar'],
        data: this.graficoJantarData,
        backgroundColor: '#becfec',
        borderWidth: 2
      },{
        label: ['Lanche N'],
        data: this.graficoLancheNData,
        backgroundColor: '#dae3f1',
        borderWidth: 2
      }],
    
    };
  
    const options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            autoSkip: false,
          }
        }],
        xAxes: [{
          ticks: {
            autoSkip: false,
          }
  
        }]
      }
    }
    
  
    return this.getChart(this.barCanvas2.nativeElement, 'bar', data, options);

    }

    getPieChart(){
      const data = {
        labels: ["Sim","Não"],
        datasets: [{
          label: 'Refri',
          data: [this.refrigerante,(100-this.refrigerante)],
          backgroundColor: "#2f6acf" ,
          borderWidth: 2
      },{
        label: 'Gasto',
        data: [0],
        backgroundColor: "#2f6acf",
        borderWidth: 2
      }],
    
    };
  
    const options = {
    }
    
  
    return this.getChart(this.pieCanvas.nativeElement, 'pie', data, options);
      
    }

  

    
}
