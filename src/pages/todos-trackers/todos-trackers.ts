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

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbService: FirebaseServiceProvider) {
    this.trackers = this.dbService.getAll('trackers','total').map(a => a.reverse())
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
  

}
