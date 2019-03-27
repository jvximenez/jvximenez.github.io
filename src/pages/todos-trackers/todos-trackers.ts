import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { TrackerEspecificoPage } from '../tracker-especifico/tracker-especifico';

/**
 * Generated class for the TodosTrackersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todos-trackers',
  templateUrl: 'todos-trackers.html',
})
export class TodosTrackersPage {

  public trackers
  public Dias
  public DiasValores 
  public teste: number = 20
  public ShowResumo = false

  public testeL = 1

  public trackers2
  public arrayOb

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbService: FirebaseServiceProvider) {
    this.trackers = this.dbService.getAll('trackers','total').map(a => a.reverse())
    this.trackers2 = this.trackers
    this.arrayOb = this.CriaArrayObjetos()
    this.Dias = this.GetArrayDias()
    
  

  }

  GetArrayDias(){
    var array = []
    this.trackers.forEach(elements => {elements.forEach(element => {if(this.VerificoSeHa(element.total,array)==true)
      {array[this.RetornoPosArray(element.total,array)][Number(element.nivel)+3] += Number(element.duracao)/24}
      else 
      {array.push([element.total,0,0,0,0,0,0]), array[this.RetornoPosArray(element.total,array)][Number(element.nivel)+3] += Number(element.duracao)/24}
      
    
    });
      
    });
  
    return array
  }

  RetornoPosArray(valor,array){
    var a = 0
    var b = 0
    while (a < array.length){
      
      if (array[a][0] == valor) {b = a}
      a += 1 
    }
    return b
  }

  VerificoSeHa(valor,array){
    var retornavel = false
    array.forEach(element => { if (element[0] == valor) {retornavel = true}
    });
    return retornavel
  }



  GetSoma(total){
    var array = [0,0,0,0,0,0]
    this.trackers.forEach(elements => {elements.forEach(element => {if(element.total == total) {array[element.nivel+2] += element.duracao}})})
    return (array)

  }

  GoToEspecifico(total){
      this.navCtrl.push(TrackerEspecificoPage, 
      {'trackers' : this.trackers,
    'total': total})
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
    if(myDate.getDay() == 0){semana = 'Segunda'}
    if(myDate.getDay() == 1){semana = 'Terça'}
    if(myDate.getDay() == 2){semana = 'Quarta'}
    if(myDate.getDay() == 3){semana = 'Quinta'}
    if(myDate.getDay() == 4){semana = 'Sexta'}
    if(myDate.getDay() == 5){semana = 'Sábado'}
    if(myDate.getDay() == 6){semana = 'Domingo'}

    final = (dia+'/'+mes+'/'+ano+" - "+semana)
    return (final)
  }


  GetSomaCategoria(Total,Parametro){

  }

  VerMais(){
    this.ShowResumo = !this.ShowResumo
  }

  VerMaisOuMenos(){
    if (this.ShowResumo == true){
      return ('Ver menos')
    }
    else{return 'Ver mais'}
  }


    ChecaValor3(parametro1,parametro2){
      var array = 0
      
      this.arrayOb.forEach(itens => {itens.forEach(item => {if (item['total'] == parametro1){
        if(item['title'].includes(parametro2)){array += Number(item['duracao'])}
       }}) })
      
      return(array)
   
    }

  CriaArrayObjetos(){
    var array = []
    this.trackers2.forEach(element => {array.push(element)})
    
    return array
  }


  Arredonda(val){
    var b;
    b = (Math.round(val*100)/100)
    return b
  }

  RetornaH(duracao){
    if (duracao == 0){
      return (" ")
    }
    else{
    var min2
    var inteiro = parseInt(duracao)
    var min = Math.round((duracao - inteiro)*60)
    min2 = String(min)
    if (min < 10) {min2 = String("0"+min)}
    return (inteiro+"h"+min2)}
  }


  

  

  
  
  

}
