import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { LivrosEditPage } from '../livros-edit/livros-edit';

/**
 * Generated class for the LivrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-livros',
  templateUrl: 'livros.html',
})
export class LivrosPage {
  public livros

  livro = {
    'dia':'',
    'mes':'',
    'ano':'',
    'total':'',
    'parcial':'',
    'title':'',
    'autor':'',
    'paginas':'',
    'idioma':'',
    'comentario':'',
    'fim':'',
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbService: FirebaseServiceProvider, public alertCtrl: AlertController ) {
    this.livros = this.dbService.getAll('livros','total').map(a => a.reverse())

  }

  Data(){
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();
    var array = [dia,mes,ano];
    return array
    
  }

  Criacao(livro){
    var array = this.Data();
    this.livro.dia = String(array[0]);
    this.livro.mes = String(array[1]);
    this.livro.ano = String(array[2]);
    this.livro.total = String(this.Total());
    this.livro.parcial =  String(this.Parcial());
    this.dbService.save('livros',livro)


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

  Ontem(livro){
    var array = this.Data();
    this.livro.dia = String(array[0]-1);
    this.livro.mes = String(array[1]);
    this.livro.ano = String(array[2]);
    this.livro.total = String(this.Total2());
    this.livro.parcial =  String(this.Parcial());
    this.dbService.save('livros',livro)

    
  }

  goToEdit(itens){
    this.navCtrl.push(LivrosEditPage, 
    {'livro' : itens})
  }

  Alert(item){
    const alert = this.alertCtrl.create({
      title: item.title,
      subTitle: ("Data: " + item.dia+"/"+item.mes+"/"+item.ano+ "<br>Autor: " + item.autor + "<br>Páginas: " + item.paginas + "<br>Fim:" +item.fim + "<br>Comentario: " + item.comentario) ,
      buttons: ['OK']
    });
    alert.present();
  }

  CalculaDias(final,inicio){
  final = String(final)
  console.log(final,inicio)
  
  var ano1 = inicio.substr(0,4);
  var mes1 = inicio.substr(4,2);
  var dia1 = inicio.substr(6,2);

  var ano2 = final.substr(0,4);
  var mes2 = final.substr(4,2);
  var dia2 = final.substr(6,2);
  
  var date1 = new Date(mes1+'/'+dia1+'/'+ano1);
  var date2 = new Date(mes2+'/'+dia2+'/'+ano2);
  console.log(date1,date2)

  var timeDiff = Math.abs(date2.getTime() - date1.getTime());
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
  console.log(diffDays)
  return(diffDays);
  }

  

}
