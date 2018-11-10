import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';

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

  public Genero;Premiacao;Filmes

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbService: FirebaseServiceProvider) {
    this.Filmes = this.dbService.getAll('filmes','total')

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
    var array = this.Data();
    this.filme.dia = String(array[0]);
    this.filme.mes = String(array[1]);
    this.filme.ano = String(array[2]);
    this.filme.total = String(this.Total());
    this.filme.parcial =  String(this.Parcial());
    this.dbService.save('filmes',filme)


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

  Parcial(){
    var total;
    var data = new Date();
    var mes = data.getMonth();
    var ano = data.getFullYear();
    total = Number(ano*100 + (mes+1));
    return total

  }

  Ontem(filme){
    var array = this.Data();
    this.filme.dia = String(array[0]-1);
    this.filme.mes = String(array[1]);
    this.filme.ano = String(array[2]);
    this.filme.total = String(this.Total());
    this.filme.parcial =  String(this.Parcial());
    this.dbService.save('filmes',filme)

    
  }


}
