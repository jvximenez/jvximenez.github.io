import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SerieEditPage } from '../serie-edit/serie-edit';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { AlertController } from 'ionic-angular';

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

  public rows;DataO

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
 

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbService: FirebaseServiceProvider, public alertCtrl: AlertController) {
  this.series = this.dbService.getAll('series','total').map(a => a.reverse())

  this.DataO = new Date().toISOString();

  this.Serie = this.SeriesA()
  
  }

  SeriesA(){
    var array = []
    var B = false
    this.series.forEach(element => {element.forEach( elem => {B = false; array.forEach(A => {if (A == elem.title) { B = true}}); if (B == false) {array.push(elem.title)}})
    
  })
  return (array)
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
    this.serie.title = String(this.serie.title)
    var array = this.Data();
    this.MudandoData(this.DataO)
    this.dbService.save('series',serie)
    this.serie.ep = String(Number(this.serie.ep) +1)


  }

  Total(){
    var total;
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth();
    var ano = data.getFullYear();
    total = Number(ano*10000 + (mes+1)*100 + dia);
    return total
  
  }

  Total2(){
    var total;
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth();
    var ano = data.getFullYear();
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
    var date = new Date
    date.setDate(date.getDate() - 1)
    this.DataO = date.toISOString()
    this.MudandoData(this.DataO)

    this.dbService.save('series',serie)
    this.serie.ep = String(Number(this.serie.ep) +1)

    
  }

  goToEdit(itens){
    this.navCtrl.push(SerieEditPage, 
    {'serie' : itens})}


  AtualizarP(){
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }

  Atalho(Serie){
    this.serie.title = Serie.title
    this.serie.duracao = Serie.duracao
    this.serie.ep = String(Number(Serie.ep) + 1)
    this.serie.netflix = Serie.netflix
    this.serie.producaoN = Serie.producaoN
    this.serie.temp = Serie.temp
    this.Criacao(this.serie)
  }

  Alert(item){
    const alert = this.alertCtrl.create({
      title: item.title,
      subTitle: ("Data: " + item.dia+"/"+item.mes+"/"+item.ano+ "<br>Temporada: " + item.temp + "<br>Episódio: " + item.ep + "<br>Duração: " +item.duracao + "<br>Comentario: " + item.comentario) ,
      buttons: ['OK']
    });
    alert.present();

  }


  Mostra(){
    
    this.MudandoData(this.DataO)
  }

  MudandoData(valor){
    console.log("Data Aqui", valor)
    
    var fields = valor.split('-')
    var dia = fields[2].split('T')
    this.serie.dia = dia[0]
    this.serie.ano =  fields[0]
    this.serie.mes =  String(Number(fields[1]))
    this.serie.total =  String(Number(Number(this.serie.ano)*10000 + Number(this.serie.mes)*100 + Number(dia[0])));
    this.serie.parcial = String(Number(Number(this.serie.ano)*100 + Number(this.serie.mes)));
  }

}

