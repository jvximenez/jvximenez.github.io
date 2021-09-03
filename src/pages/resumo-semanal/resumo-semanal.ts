import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import chartJs from 'chart.js';
import { dateDataSortValue } from 'ionic-angular/umd/util/datetime-util';

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
  @ViewChild('barCanvas2') barCanvas2;
  barChart2: any;
  @ViewChild('circleCanvas') circleCanvas;
  circleChart: any;
  @ViewChild('notaCanvas') notaCanvas;
  notaChart: any;



  DadosSemRef;DadosSemList= [];DadosSemList2= []
  DadosMesRef;DadosMesList;
  DadosAnoRef;DadosAnoList;DadosAnoArrays;
  
  Mes
  Ano
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  this.DadosSemRef = firebase.database().ref('/diario').limitToLast(14).orderByChild("total")
  this.DadosMesRef = firebase.database().ref('/diario').limitToLast(31).orderByChild("total")
  this.DadosAnoRef = firebase.database().ref('/diario').limitToLast(365).orderByChild("ano")
  this.Mes = this.GetData("Mes")
  this.Ano = this.GetData("Ano")

  this.DadosSemRef.on('value', DadosSemList => {
    let DadosArray = [];
    DadosSemList.forEach( dado => { 
    var obj
    obj = dado.val()
    obj.DiaSemana = this.TotalToData(obj.total)
    obj.key = dado.key
    DadosArray.push(obj);
    return false;
    });
    DadosArray = DadosArray.reverse()
    var numero = 0
    numero = DadosArray.findIndex(element => element.DiaSemana == "Domingo")
    
    console.log(numero, 'qual o numero do array')
    DadosArray.slice(0,numero)

    this.DadosSemList = (DadosArray.slice(0,Number(numero)+1)).reverse();
    this.DadosSemList2 = (DadosArray.slice(Number(numero),Number(numero)+7)).reverse()
  
    console.log("ola", this.DadosSemList,this.DadosSemList2)
    });

    this.DadosMesRef.on('value', DadosMesList => {
      let DadosArray = [];
      DadosMesList.forEach( dado => { 
      var obj
      obj = dado.val()
      obj.key = dado.key
      if (obj.parcial == this.Mes){
        DadosArray.push(obj);}
      return false;
      });
      this.DadosMesList = DadosArray;
      console.log('Array', DadosArray)    
      });


      this.DadosAnoRef.on('value', DadosAnoList => {
        let DadosArray = [];
        DadosAnoList.forEach( dado => { 
        var obj
        obj = dado.val()
        obj.key = dado.key
        if (obj.ano == this.Ano){
          DadosArray.push(obj);}
        return false;
        });
        this.DadosAnoList = DadosArray;
        console.log('Array', DadosArray)    
        });

        this.DadosAnoRef.on('value', DadosAnoList2 => {
          let AnoArray = [];
          DadosAnoList2.forEach( dado => { 
          var obj
          obj = dado.val()
          obj.key = dado.key
          
          AnoArray.push(obj);}
          );
          
          this.DadosAnoList = AnoArray;
          console.log('Array', AnoArray)    
        });



    console.log("ola", this.DadosSemList,this.DadosSemList2)
    console.log('oi')
    

    

  }

  GetData(Tipo){
    var parcial = 0
    let data = new Date
    if (Tipo == "Mes"){
      let mes = data.getMonth()+1
    let ano = data.getFullYear()
    parcial = Number(ano)*100+mes
    }
    if (Tipo == "Ano"){
    let ano = data.getFullYear()
    parcial = Number(ano)
    }

    return (parcial)
  }

  

  TotalToData(total){
    var dia;
    var mes;
    var ano;
    var semana
    var final;
    ano = total.substr(0,4);
    mes = total.substr(4,2);
    dia = total.substr(6,2);

    var myDate = new Date();
    myDate.setFullYear(Number(ano));
    myDate.setMonth(Number(mes)-1);
    myDate.setDate(Number(dia)); 
    if(myDate.getDay() == 1){semana = 'Segunda'}
    if(myDate.getDay() == 2){semana = 'Terça'}
    if(myDate.getDay() == 3){semana = 'Quarta'}
    if(myDate.getDay() == 4){semana = 'Quinta'}
    if(myDate.getDay() == 5){semana = 'Sexta'}
    if(myDate.getDay() == 6){semana = 'Sábado'}
    if(myDate.getDay() == 0){semana = 'Domingo'}

    final = (dia+'/'+mes+'/'+ano+" - "+semana)
    return (semana)
  }


  ngAfterViewInit(){
    setTimeout(()=> {
      this.barChart = this.getBarChart();
      this.barChart2 = this.getBarChart2();
      this.circleChart =  this.getCircleChart();
      
    },600)}

    getBarChart(){
      const data = {
        labels: ['Dom',"Seg","Ter","Qua","Qui","Sex","Sab"],
        datasets: [{
          label: ['Minimo'],
          data: [8000,8000,8000,8000,8000,8000,8000],
          type: 'line',
          backgroundColor: 'rgba(255, 255, 255, .100)',
          borderColor: '#FF0000'},
          {
          label: ['Passos passados'],
          data: this.DadosSemList2.map(a => Number(a.passos)),
          backgroundColor:  '#C4DAFF',
          borderWidth: 0.5,
      },{
      label: ['Atual'],
          data: this.DadosSemList.map(a => Number(a.passos)),
          backgroundColor:  '#2f6acf',
          borderWidth: 2},
         
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

  getBarChart2(){
    const data = {
      labels: this.DadosMesList.map(a=> Number(a.dia)),
      datasets: [{
        label: ['Peso'],
        yAxisID: 'B',
        data: this.DadosMesList.map(a=> Number(a.peso)),
        type: 'line',
        
        backgroundColor: 'rgba(255, 255, 255, .255)',
        borderColor: '#008354'},{

        label: ['Passos Mes'],
        yAxesGroup: 'A',
        data: this.DadosMesList.map(a => Number(a.passos)),
        backgroundColor:  '#2f6acf',
        borderWidth: 0.5,
    }]}

  const options = {
    scales: {
      yAxes: [{
        id: 'A',
        type: 'linear',
        position: 'left',
        scalePositionLeft: true
      },
      {
        id: 'B',
        type: 'linear',
        position: 'right',
        scalePositionLeft: true,
        ticks: {
          max: 100,
          min: 60
        }
        
      }
    ]
  ,
      xAxes: [{
        ticks: {
          autoSkip: false,
        }

      }]
    }
  }

  return this.getChart(this.barCanvas2.nativeElement, 'bar', data, options);
}
  
  getChart(context, charType, data, options){
    return new chartJs(context, {
      data,
      options,
      type: charType
      })
  }

  getCircleChart(){
    const data = {
      labels: ['Ler','Correr',"Doce","Refri","Alcool","Tempinho","uhu","Agradecer","Meditar"],
      datasets: [
        {
        label: ['Atual'],
        data: this.Teste(this.DadosSemList),
        backgroundColor:  '#008354',
        borderWidth: 0.5,
    },{
    label: ['Mes'],
        data: this.Teste(this.DadosMesList),
        backgroundColor:  '#88A9E3',
        borderWidth: 2},{
    label: ['Ano'],
        data: this.Teste(this.DadosAnoList),
        backgroundColor:  '#E1E9F8',
        borderWidth: 2}
      ]}
      

  const options = {
    maintainAspectRatio: false,
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
  

  return this.getChart(this.circleCanvas.nativeElement, 'bar', data, options);


}


  Teste(valor){
    var array = []
    var total = 0
    var leitura = 0
    var correr = 0
    var doce = 0
    var refri = 0
    var alcool = 0
    var tempinho = 0
    var uhu = 0
    var besteira = 0
    var agradecer = 0 
    var meditar = 0
    valor.forEach(element => { if(element.leitura == true){leitura +=1};if(Number(element.andando) > 0 || Number(element.correndo)>0){correr += 1};
    if(Number(element.doce) > 0){doce+=1};
    if(Number(element.refrigerante) > 0){refri +=1 };
    if(Number(element.alcool) >0){alcool +=1 };
    if(Number(element.tempinho) > 0) {tempinho += 1};
    if(Number(element.UHU) > 0) {uhu += 1};
    if((element.besteira) == true) {besteira += 1};
    if((element.agradecer) == true) {agradecer += 1};
    if((element.meditacao) == true) {meditar += 1};
    total+=1});

    array.push(leitura/total)
    array.push(correr/total)
    array.push(doce/total)
    array.push(refri/total,alcool/total, tempinho/total, uhu/total, besteira/total, agradecer/total, agradecer/meditar)

    console.log("aqui valores,", total, leitura,array)
    return array
  }

    


}
