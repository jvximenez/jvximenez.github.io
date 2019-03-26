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

  @ViewChild('barCanvas3') barCanvas3;
  bar3Chart: any;

  public mes: any
  public dias: any
  public dias2: any
  public verdade: boolean
  public gastos: any

  public teste
  public passos;tempinho;quantidade;UHU;cafe;lancheM;almoco;lancheT;jantar;estudos;aulas
  public refrigerante; alcool;leitura;agradecimento

  public graficoG;graficoData;graficoDado
  public graficoCafeG;graficoCafeData;graficoCafeDado
  public graficoLancheMG;graficoLancheMData;graficoLancheMDado

  public graficoAlmocoData;graficoLancheTData;graficoJantarData;graficoLancheNData;graficoMedia;  graficoMedia1;graficoMediaMedia
  public graficoDataMedia; graficoDataMedia7

  public grafPeso;grafPesoMedia;grafPesoG;graficoDataMedia7F;graficoPassosMin; graficoPesoMedia7;graficoPesoMin;graficoPesoMedia7F
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbService: FirebaseServiceProvider) {
    

    

    this.mes = this.navParams.get('mes');
    this.gastos = this.navParams.get('gastos');
    this.verdade = true;
    if(this.mes != "total"){
      
      this.dias = this.dbService.getAllEspecifico('diario','parcial',String(this.mes)).map(a => a.reverse()).map(a => a.sort(function(a, b) {return Number(String(b['dia']- Number(String(a['dia']))))}))
    }
    if(this.mes == "total"){
     
      this.dias = this.dbService.getAll('diario','parcial').map(a => a.reverse()).map(a => a.sort(function(a, b) {return Number(String(b['total']- Number(String(a['total']))))}))
    }
   
    this.dias2 = this.dias.map(a => a.reverse());

    this.graficoG = this.Media2('passos');
    this.graficoData = this.graficoG[0];
    this.graficoDado = this.graficoG[1];
    this.graficoDataMedia = this.graficoG[2];
    this.graficoDataMedia7= this.graficoG[3];
    this.graficoDataMedia7F = this.graficoG[4]
    this.graficoPassosMin = this.graficoG[5]
    

    this.grafPesoG = this.Media2('peso')
    
    this.grafPeso = this.grafPesoG[0]
    this.grafPesoMedia = this.grafPesoG[2]
  
    this.graficoPesoMedia7F = this.grafPesoG[4]
    



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


    this.graficoMedia1 = this.MediaAlimentacao()
    this.graficoMedia = this.graficoMedia1[0]
    this.graficoMediaMedia = this.graficoMedia1[1]

   
    
    


    

    
  }

  Media3(dado){
    
    var cont = 1
    var sum = 0
    var array = []
    dado.forEach(A => {sum += Number(A), array.push((Number(A)/cont)),cont += 1})
   
    return [array]
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
    var cont = 0
    var sum = 0 
    let array = []
    let array2 = []
    let array3 = []
    let array4 = []
    let array5 = []
    let array6 = []
    let array7 = []

    let v1 = 0; let v2=0; let v3=0; let v4=0; let v5=0; let v6=0; let v7=0; let Med

    this.dias2.forEach(element => {element.forEach(dia => {(array).push(Number(dia[dado])), (array2).push(Number(dia['dia'])), sum += Number(dia[dado]),cont += 1,(array4).push(sum/cont),
    (v7 = v6, v6=v5,v5=v4,v4=v3,v3=v2,v2=v1),v1 = dia[dado],Med = ((Number(v1))+(Number(v2))+(Number(v3))+(Number(v4))+(Number(v5))+(Number(v6))+(Number(v7)))/7, array5.push(Med);if(cont % 7 == 0){array6.push(Med,Med,Med,Med,Med,Med,Med)}array7.push(8000)})})
    array3 = [array,array2,array4,array5,array6,array7]
    
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


  MediaAlimentacao(){
    
    var array = []
    var cont = 0
    var sum = 0
    var arrayF
    var array2 = []
    var MEDIA
    this.dias2.forEach(itens => {itens.forEach(item => {MEDIA = (Number(item.cafe)*1 + 
      Number(item.almoco)*5 + Number(item.jantar)*8 + Number(item.lancheM)*0.3 + 
      Number(item.lancheT)*0.3 + Number(item.lancheN)*1)/Number(15.6),array.push(MEDIA),cont+=1,sum+=MEDIA,array2.push(sum/cont)})})
    
    arrayF = [array,array2]
    return arrayF
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
      this.bar3Chart = this.getBarChart3();
      
    },800)

    setTimeout(()=> {
      
    },200)
}

    getBarChart(){
      const data = {
        labels: this.graficoDado,
        datasets: [{
          label: ['Passos'],
          data: this.graficoData,
          backgroundColor:  '#2f6acf',
          borderWidth: 2
      },{
      label: ['Média'],
      data: this.graficoDataMedia,
      type: 'line',
      backgroundColor: 'rgba(255, 255, 255, .4)',
      borderColor: '#2f6acf'
    },{
      label: ['Ponderado 7'],
      data: this.graficoDataMedia7,
      type: 'line',
      backgroundColor: 'rgba(255, 255, 255, .4)',
      borderColor: '#2f6acf'},
      {
        label: ['Semanas'],
        data: this.graficoDataMedia7F,
        type: 'line',
        backgroundColor: 'rgba(255, 255, 255, .4)',
        borderColor: '#2f6acf'},
      {
        label: ['Minimo'],
        data: this.graficoPassosMin,
        type: 'line',
        backgroundColor: 'rgba(255, 255, 255, .4)',
        borderColor: '#FF0000'} 
      ]}
  
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
      },{
      label: ['Parcial'],
      data: this.graficoMedia,
      type: 'line',
      backgroundColor: 'rgba(255, 255, 255, .4)',
      borderColor: '#2f6acf'
    },{
      label: ['Média'],
      data: this.graficoMediaMedia,
      type: 'line',
      backgroundColor: 'rgba(230, 230, 255, .4)',
      borderColor: '#808080'
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


    getBarChart3(){
      const data = {
        labels: this.graficoDado,
        datasets: [{
          label: ['Peso'],
          data: this.grafPeso,
          backgroundColor:  '#2f6acf',
          borderWidth: 2
      },{
      label: ['Média'],
      data: this.grafPesoMedia,
      type: 'line',
      backgroundColor: 'rgba(255, 255, 255, .4)',
      borderColor: '#2f6acf'},
    {
      label: ['Semana'],
      data: this.graficoPesoMedia7F,
      type: 'line',
      backgroundColor: 'rgba(255, 255, 255, .4)',
      borderColor: '#2f6acf'}
    
      ]}
  
    const options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:false,
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
    
  
    return this.getChart3(this.barCanvas3.nativeElement, 'bar', data, options);


    
  }
  
    getChart3(context, charType, data, options){
      return new chartJs(context, {
        data,
        options,
        type: charType
      })
    }



    somaPagamento(data){
      var valorPag = 0 
      this.gastos.forEach(item => {if (String(item[4]) == String(data)) { valorPag = valorPag + Number(item[0])}}
      );
    
      return(Math.round(valorPag))
    }

  

  

    
}
