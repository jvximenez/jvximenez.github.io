import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';

/**
 * Generated class for the SerieEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-serie-edit',
  templateUrl: 'serie-edit.html',
})
export class SerieEditPage {

  public Serie;serie

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbService: FirebaseServiceProvider) {
   this.serie = this.navParams.get('serie')
  
   
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
  
    Criacao(filme){
      var array = this.Data();
      this.serie.dia = String(array[0]);
      this.serie.mes = String(array[1]);
      this.serie.ano = String(array[2]);
      this.serie.total = String(this.Total());
      this.serie.parcial =  String(this.Parcial());
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
  
    Parcial(){
      var total;
      var data = new Date();
      var mes = data.getMonth();
      var ano = data.getFullYear();
      total = Number(ano*100 + (mes+1));
      return total
  
    }
  
    
  

    
  
    Atualizar(serie){
      this.dbService.update('series',serie).then( d => {
        this.navCtrl.pop()});
      }
    
  
    Deletar(serie){
      this.dbService.revome('series',serie).then( d => {
        this.navCtrl.pop()
      });
      }
      
  
  }



