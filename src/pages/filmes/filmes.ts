import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { FilmeEditPage } from '../filme-edit/filme-edit';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the FilmesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filmes',
  templateUrl: 'filmes.html',
})
export class FilmesPage {

  public rows;DataO
  
  filme = { 
    'dia':'',
    'mes':'',
    'ano':'',
    'total':'',
    'parcial':'',
    'title':'',
    'nota':'',
    'diretor':'',
    'comentario':'',
    'lancamento':'',
    'premios':'',
    'genero':'',
    'cinema': false,
    'netflix': false,
    'producaoN':false,
  }

  public show = false

  public Genero;Premiacao;Filmes

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbService: FirebaseServiceProvider,public alertCtrl: AlertController ) {
    this.Filmes = this.dbService.getAll('filmes','total').map(a => a.reverse())

    this.DataO = new Date().toISOString();
    

    this.Genero = [
      {title: "Ação"},
      {title: "Comédia"},
      {title: "Drama"},
      {title: "Romance"},
      {title: "Super-heroi"},
      {title: "Suspense"},
      {title: "Teror"},
      {title: "Animação"},
      {title: "Plot Twist"},
      {title: "Real"},
      {title: "Clássico"},
      {title: "Teen"},
      {title: "Ficção Científica"},
      {title: "Musical"},
      {title: "Nacional"},
      {title: "Estrangeiro"},
      {title: ""}

    ]

    this.Premiacao = [
      {title: "Oscar"},
      {title: "Indicação ao Oscar"},
      {title: "Clássico"},
      {title: "Globo de ouro"},
      {title: "Outro"},
      {title: ""}

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

  Criacao(filme){
    this.MudandoData(this.DataO)
    
    this.dbService.save('filmes',filme)


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

  Ontem(filme){
    var date = new Date
    date.setDate(date.getDate() - 1)
    this.DataO = date.toISOString()
    this.MudandoData(this.DataO)
    
    this.dbService.save('filmes',filme)

    
  }

  goToEdit(itens){
    this.navCtrl.push(FilmeEditPage, 
    {'filme' : itens,})}

  AtualizarP(){
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }


  Show(){
    this.show = !this.show;
    return (this.show)
  }

  Informacoes(filme) {
    const alert = this.alertCtrl.create({
      title: filme.title,
      subTitle: ("Data: " + filme.dia+"/"+filme.mes+"/"+filme.ano+ "<br>Tipo: " + filme.genero + "<br>Nota: " + filme.nota + "<br>Diretor: " +filme.diretor + "<br>Comentario: " + filme.comentario) ,
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
    this.filme.dia = dia[0]
    this.filme.ano =  fields[0]
    this.filme.mes =  String(Number(fields[1]))
    this.filme.total =  String(Number(Number(this.filme.ano)*10000 + Number(this.filme.mes)*100 + Number(dia[0])));
    this.filme.parcial = String(Number(Number(this.filme.ano)*100 + Number(this.filme.mes)));
  }


  
}
