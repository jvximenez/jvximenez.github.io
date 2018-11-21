import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';

/**
 * Generated class for the LivrosEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-livros-edit',
  templateUrl: 'livros-edit.html',
})
export class LivrosEditPage {

  public livro

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbService: FirebaseServiceProvider) {
    this.livro = this.navParams.get('livro')

  }

  Final(livro){
    this.livro.fim = this.Total()
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

  Atualizar(tarefa){
    this.dbService.update('livros',tarefa).then( d => {
      this.navCtrl.pop()});
    }
  

  Deletar(tarefa){
    this.dbService.revome('livros',tarefa).then( d => {
      this.navCtrl.pop()
    });
    }


}
