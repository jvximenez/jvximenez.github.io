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

  public mes: any
  public dias: any
  public verdade: boolean

  public teste
  public passos;tempinho;quantidade;UHU;cafe;lancheM;almoco;lancheT;jantar;estudos;aulas
  public refrigerante; alcool;leitura;agradecimento

  public graficoG;graficoData;graficoDado

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbService: FirebaseServiceProvider) {

    

    this.mes = this.navParams.get('mes');
    this.verdade = true;
    this.dias = this.dbService.getAllEspecifico('diario','parcial',String(this.mes)).map(a => a.reverse());

    this.graficoG = this.Media2('passos');
    this.graficoData = this.graficoG[0];
    this.graficoDado = this.graficoG[1];
    console.log("aqui",this.graficoG,this.graficoDado,this.graficoData)

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
    this.dias.forEach(element => {element.forEach(dia => {(array).push(Number(dia[dado])), (array2).push(Number(dia['dia']))})
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
    this.dias.forEach(element => {element.forEach(dia => {quantidade += 1 ,  soma += Number(dia[dado]) }),
    final = Number(soma)/Number(quantidade),
    final =  Math.round(final)
    array.push(final)})
    return array;
  }

  SeHouve(dado){
    let soma = 0
    let quantidade = 0
    let array: number[] = []
    let final : number;
    this.dias.forEach(element => {element.forEach(dia => {quantidade += 1 ; if (dia[dado] > 0 || dia[dado] == true)  {soma += 1} }),
    
    final = (Number(soma)/Number(quantidade))*100,
    final =  Math.round(final)
    array.push(final)})
    
    return array;

  }

  //--------------------CHarts-------------------------------//

  ngAfterViewInit(){
    setTimeout(()=> {
      this.barChart = this.getBarChart();
      
    },100)
   }

    getBarChart(){
      const data = {
        labels: ['Passos',"dsfdfs","ddsdas"],
        datasets: [{
          label: ['passos'],
          data: [151,1516,545],
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


}
