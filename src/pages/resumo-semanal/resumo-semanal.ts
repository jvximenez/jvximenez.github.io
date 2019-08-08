import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import chartJs from 'chart.js';

/**
 * Generated class for the ResumoSemanalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resumo-semanal',
  templateUrl: 'resumo-semanal.html',
})
export class ResumoSemanalPage {
  @ViewChild('barCanvas') barCanvas;
  barChart: any;

  DadosSemRef;DadosSemList= [];
  DadosMesRef;DadosMesList;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  this.DadosSemRef = firebase.database().ref('/diario').limitToLast(7).orderByChild("total")
  this.DadosMesRef = firebase.database().ref('/diario').limitToLast(50).orderByChild("total")

  this.DadosSemRef.on('value', DadosSemList => {
    let DadosArray = [];
    DadosSemList.forEach( dado => { 
    var obj
    obj = dado.val()
    obj.key = dado.key
    DadosArray.push(obj);
    return false;
    });
    DadosArray = DadosArray.reverse()
    this.DadosSemList = DadosArray;
    console.log('Array', DadosArray, (this.DadosSemList.map(a => Number(a['passos']))))
    });

    this.DadosMesRef.on('value', DadosMesList => {
      let DadosArray = [];
      DadosMesList.forEach( dado => { 
      var obj
      obj = dado.val()
      obj.key = dado.key
      DadosArray.push(obj);
      return false;
      });
      DadosArray = DadosArray.reverse()
      this.DadosMesList = DadosArray;
      console.log('Array', DadosArray)    
      });

    console.log("ola", this.DadosSemList)
    console.log('oi')
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResumoSemanalPage');
   
  }

  ngAfterViewInit(){
    setTimeout(()=> {
      this.barChart = this.getBarChart();
      
    },300)}

    getBarChart(){
      const data = {
        labels: [0,1,2,3,4,5,6],
        datasets: [{
          label: ['Passos'],
          data: (this.DadosSemList.map(a => Number(a.passos))),
          backgroundColor:  '#2f6acf',
          borderWidth: 2
      }]};
  
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
