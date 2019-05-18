import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';

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

  Trackers;
  ArrayTrackers;
  DiasArray;
  NotasArray;
  ArrayOb;
  valores;

  constructor(public navCtrl: NavController, public navParams: NavParams,public dbService: FirebaseServiceProvider) {
    this.DiasArray = navParams.get('Dias')
    this.ArrayTrackers = navParams.get('TrackerArray')
    this.ArrayOb = navParams.get('ArrayOb')
    this.valores = this.valores = [0.5,1,2,4,6,4]
    this.NotasArray = this.CriaArrayNotas();
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

  

}
