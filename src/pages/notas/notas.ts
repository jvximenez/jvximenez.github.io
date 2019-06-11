import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import chartJs from 'chart.js';


/**
 * Generated class for the NotasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notas',
  templateUrl: 'notas.html',
})
export class NotasPage {
  @ViewChild('barCanvas3') barCanvas3;
  bar3Chart: any;

  Trackers;
  ArrayTrackers;
  DiasArray;
  NotasArray;
  ArrayOb;
  valores;
  DiasDiasArray
  NotasMedia

  constructor(public navCtrl: NavController, public navParams: NavParams,public dbService: FirebaseServiceProvider) {
    this.DiasArray = navParams.get('Dias')
    this.DiasDiasArray = this.CriaDiasDias();
    this.ArrayTrackers = navParams.get('TrackerArray')
    this.ArrayOb = navParams.get('ArrayOb')
    this.valores = this.valores = [0.5,1,2,4,6,4]
    this.NotasArray = this.CriaArrayNotas();
    console.log(this.DiasDiasArray)
    this.NotasMedia = this.CriaArrayMedia()
    console.log(this.NotasMedia,'aquiiiii')
  }

  CriaArrayMedia(){
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
    this.NotasArray.forEach(element => {cont += 1,
    (v7 = v6, v6=v5,v5=v4,v4=v3,v3=v2,v2=v1),v1 = element,Med = ((Number(v1))+(Number(v2))+(Number(v3))+(Number(v4))+(Number(v5))+(Number(v6))+(Number(v7)))/7;array5.push(Med) ;if(cont % 7 == 0){array6.push(Med,Med,Med,Med,Med,Med,Med)}array7.push(8000)})
    array3 = [array,array2,array4,array5,array6,array7]

    return array6
  }

  Pontua(total){
    var valores = this.valores
    var horas = [0,0,0,0,0,0]
    this.ArrayTrackers.forEach(item => {if (item['total'] == total ){horas[(Number(item['nivel'])+2)] += Number(item['duracao'])}})
    var i = 0
    var final = 0
    while (i < 6){
      final += horas[i]*valores[i]
      i+=1
    }
    return(final)
  }

  CriaDiasDias(){
    let array = []
    this.DiasArray.forEach(element => {var data = new Date(this.DivideData(element[0])[0],this.DivideData(element[0])[1], this.DivideData(element[0])[2],0,0,0,0);
       array.push(data)
      
    });
    return array
  }

  DivideData(total){
    var dia;
    var mes;
    var ano;
    ano = Number(total.substr(0,4));
    mes = Number(total.substr(4,2));
    dia = Number(total.substr(6,2));
    console.log([ano,mes,dia])
    return([ano,mes,dia])

  }

  CriaArrayNotas(){
    let array = [];
    this.DiasArray.forEach(element => {array.push(this.Pontua(element[0]))})
    console.log(array)
    return array
      
    
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
    return (final)
  }

  Arredonda(val){
    var b;
    b = (Math.round(val*100)/100)
    return b
  }




  //---------------------------------------CHARTS----------------------------------//
  ngAfterViewInit(){
    setTimeout(()=> {
      this.bar3Chart = this.getBarChart3();
      
    },800)

    setTimeout(()=> {
      
    },200)


}


    getBarChart3(){
      const data = {
        labels: this.DiasDiasArray,
        datasets: [{
          label: ['Nota'],
          type:'bar',
          data: this.NotasArray,
          backgroundColor:  '#2f6acf',
          borderWidth: 1
      },{
        label: ['Semanas'],
        data: this.NotasMedia,
        type: 'line',
        backgroundColor: 'rgba(255, 255, 255, .4)',
        borderColor: '#2f6acf'},
        ]};
    const options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true,
            autoSkip: false,
          }
        }],
        xAxes: [{
          barPercentage: 0.5,
            barThickness: 5,
            maxBarThickness: 6,
            minBarLength: 2,
            gridLines: {
                offsetGridLines: true
            },
          type: 'time',
          time: {
              unit: 'week',
              displayFormats:{ week: 'DD MM'}
          }
      }]
  }
}
;


    return this.getChart3(this.barCanvas3.nativeElement, 'bar', data, options);



    }

    getChart3(context, charType, data, options){
      return new chartJs(context, {
        data,
        options,
        type: charType
      })
    }

  

}
