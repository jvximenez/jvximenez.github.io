import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { TarefaEditPage } from '../tarefa-edit/tarefa-edit';

/**
 * Generated class for the TarefasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tarefas',
  templateUrl: 'tarefas.html',
})
export class TarefasPage {

  tarefa = {
    'dia':'',
    'mes':'',
    'ano':'',
    'total':'',
    'parcial':'',
    'title':'',
    'check': false,
  }

  public tarefas

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbService: FirebaseServiceProvider) {
  
    this.tarefas = this.dbService.getAll('tarefas','total').map(d => d.reverse())
  }

  Data(){
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();
    var array = [dia,mes,ano];
    return array
    
  }

  Criacao(tarefa){
    var array = this.Data();
    this.tarefa.dia = String(array[0]);
    this.tarefa.mes = String(array[1]);
    this.tarefa.ano = String(array[2]);
    this.tarefa.total = String(this.Total());
    this.tarefa.parcial =  String(this.Parcial());
    this.dbService.save('tarefas',tarefa)
    this.tarefa.title = " "


  }

  Total(){
    var total;
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth();
    var ano = data.getFullYear();
    var hora = data.getHours();
    var min = data.getMinutes();
    total = Number(ano*10000 + (mes+1)*100 + dia);
    return total
  
  }

  Total2(){
    var total;
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth();
    var ano = data.getFullYear();
    var hora = data.getHours();
    var min = data.getMinutes();
    total = Number(ano*10000 + (mes+1)*100 + dia-1);
    return total
  
  }

  Total3(){
    var total;
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth();
    var ano = data.getFullYear();
    var hora = data.getHours();
    var min = data.getMinutes();
    total = Number(ano*10000 + (mes+1)*100 + dia+1);
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

  Ontem(tarefa){
    var array = this.Data();
    this.tarefa.dia = String(array[0]-1);
    this.tarefa.mes = String(array[1]);
    this.tarefa.ano = String(array[2]);
    this.tarefa.total = String(this.Total2());
    this.tarefa.parcial =  String(this.Parcial());
    this.dbService.save('tarefas',tarefa)

    
  }

  Amanha(tarefa){
    var array = this.Data();
    this.tarefa.dia = String(array[0]+1);
    this.tarefa.mes = String(array[1]);
    this.tarefa.ano = String(array[2]);
    this.tarefa.total = String(this.Total3());
    this.tarefa.parcial =  String(this.Parcial());
    this.dbService.save('tarefas',tarefa)

    
  }

  goToEdit(itens){
    this.navCtrl.push(TarefaEditPage, 
    {'tarefa' : itens})}


  

  Atualizar(tarefas){
    this.dbService.update('tarefas',tarefas)
    }

  Deletar(tarefas){
    this.dbService.revome('tarefas',tarefas)
    }

  }


  


