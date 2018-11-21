import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SerieEditPage } from '../serie-edit/serie-edit';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';

/**
 * Generated class for the SeriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-series',
  templateUrl: 'series.html',
})
export class SeriesPage {

  serie = {
    'dia':'',
    'mes':'',
    'ano':'',
    'total':'',
    'parcial':'',
    'title':'',
    'temp':'',
    'ep':'',
    'duracao':'',
    'comentario':'',
    'netflix': true,
    'producaoN':false,
    

  }

  public Serie;series

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbService: FirebaseServiceProvider) {
  this.series = this.dbService.getAll('series','total').map(a => a.reverse())

  this.Serie = [
    {title: "Modern Family"},
    {title: "Izoombie"},
    {title: "House of cards"},
    {title: "How to get away with murder"},
    {title: "The flash"},
    {title: "Santa Clarita Diet"},
    {title: "Atypical"},
    {title: "Suits"},
    {title: "Orphan black"}
  ]
  }


  Data(){
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();
    var array = [dia,mes,ano];
    return array
    
  }

  Criacao(serie){
    var array = this.Data();
    this.serie.dia = String(array[0]);
    this.serie.mes = String(array[1]);
    this.serie.ano = String(array[2]);
    this.serie.total = String(this.Total());
    this.serie.parcial =  String(this.Parcial());
    this.dbService.save('series',serie)
    this.serie.ep = String(Number(this.serie.ep) +1)


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

  Parcial(){
    var total;
    var data = new Date();
    var mes = data.getMonth();
    var ano = data.getFullYear();
    total = Number(ano*100 + (mes+1));
    return total

  }

  Ontem(serie){
    var array = this.Data();
    this.serie.dia = String(array[0]-1);
    this.serie.mes = String(array[1]);
    this.serie.ano = String(array[2]);
    this.serie.total = String(this.Total2());
    this.serie.parcial =  String(this.Parcial());
    this.dbService.save('series',serie)
    this.serie.ep = String(Number(this.serie.ep) +1)

    
  }

  goToEdit(itens){
    this.navCtrl.push(SerieEditPage, 
    {'serie' : itens})}


  AtualizarP(){
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }

}

