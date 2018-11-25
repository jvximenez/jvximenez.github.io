import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { VinhoEditPage } from '../vinho-edit/vinho-edit';

/**
 * Generated class for the VinhosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vinhos',
  templateUrl: 'vinhos.html',
})
export class VinhosPage {

  public pais; vinhos
  public Uvas; Tipo

  vinho = {
    'dia':'',
    'mes':'',
    'ano':'',
    'total':'',
    'parcial':'',
    'title':'',
    'nota':'',
    'tipo':'',
    'safra':'',
    'preco':'',
    'uva':'',
    'pais':'',
    'comentario': '',
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbService: FirebaseServiceProvider, public alertCtrl: AlertController) {
    this.vinhos = this.dbService.getAll('vinhos','total').map(a => a.reverse())

  this.Uvas = [
    {'title':"Terroir"},
    {'title':"Cabernet Syrah"},
    {'title':"Cabernet Souvignon"},
    {'title':"Merlot"},
    {'title':"Malbec"},
    {'title':"Camérnère"},
    {'title':"Pinot Noir"},
    {'title':"Chardonnay"},
    {'title':"Sauvignon Blanc"},
    {'title':""},

  ]

  this.pais = [
    {'title':"França"},
    {'title':"Italia"},
    {'title':"Espanha"},
    {'title':"Portugal"},
    {'title':"Chile"},
    {'title':"Brasil"},
    {'title':""},

  ]

  this.Tipo = [
    {'title':"Branco"},
    {'title':"Tinto"},
    {'title':"Rose"},
    {'title':"Espumante"},
    {'title':"Doce"},
    {'title':""},
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

  Criacao(vinho){
    var array = this.Data();
    this.vinho.dia = String(array[0]);
    this.vinho.mes = String(array[1]);
    this.vinho.ano = String(array[2]);
    this.vinho.total = String(this.Total());
    this.vinho.parcial =  String(this.Parcial());
    this.dbService.save('vinhos',vinho)


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

  Ontem(vinho){
    var array = this.Data();
    this.vinho.dia = String(array[0]-1);
    this.vinho.mes = String(array[1]);
    this.vinho.ano = String(array[2]);
    this.vinho.total = String(this.Total2());
    this.vinho.parcial =  String(this.Parcial());
    this.dbService.save('vinhos',vinho)

    
  }

   goToEdit(itens){
    this.navCtrl.push(VinhoEditPage, 
    {'vinho' : itens})}


    Alert(item){
      const alert = this.alertCtrl.create({
        title: item.title,
        subTitle: ("Data: " + item.dia+"/"+item.mes+"/"+item.ano+ "<br>Nota: " + item.nota + "<br>Tipo: " + item.tipo + "<br>Safra: " + item.safra + "<br>Preço: " + item.preco + "<br>Uva: " + item.uva +  "<br>Pais: " + item.pais + "<br>Comentário: " + item.comentario),
        buttons: ['OK']
      });
      alert.present();
    }



  }

