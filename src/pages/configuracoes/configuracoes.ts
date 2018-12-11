import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';

/**
 * Generated class for the ConfiguracoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configuracoes',
  templateUrl: 'configuracoes.html',
})
export class ConfiguracoesPage {
  public tarefa = {
    'title':'',
    'nivel':'',
    'check':true,
    'categoria':'',
    'ordem':'',
  }
  public remedio = {
    'title':'',
    'check':true,
    'ordem':'',
  }
  public atividade = {
    'title':'',
    'check':true,
    'ordem':'',
  }
  public role = {
    'title':'',
    'check':true,
    'ordem':'',
  }
  public estudo = {
    'title':'',
    'check':true,
    'ordem':'',
  }
  public pessoa = {
    'title':'',
    'check':true,
    'ordem':'',
  }
  public viagem= {
    'pais':'',
    'check':true,
  }
  public cidade = {
    'title':'',
    'check':true,
  }
  public dia = {
    'title':'',
  }

  public tarefas; remedios; atividades; roles; estudos; pessoas; viagens; cidades; dias;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbService: FirebaseServiceProvider, public alertCtrl: AlertController) {
    this.remedios=this.dbService.getAll('configuracoes/remedios','ordem')
    this.atividades=this.dbService.getAll('configuracoes/atividades','ordem')
    this.roles=this.dbService.getAll('configuracoes/roles','ordem')
    this.estudos=this.dbService.getAll('configuracoes/estudos','ordem')
    this.pessoas=this.dbService.getAll('configuracoes/pessoas','ordem')
    this.viagens=this.dbService.getAll('configuracoes/viagens','ordem')
  }


  CriaNovo(local){
    const prompt = this.alertCtrl.create({
      title: 'Novo:'+String(local),
      message: "Entre com o nome e ordem",
      inputs: [
        {
          name: 'title',
          placeholder: 'Nome',

        },
        {
          name: 'ordem',
          placeholder:"Ordem"
        },
      ],
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Adicionar',
          handler: data => {
            if (local == "remedios"){
              this.remedio.title = data.title, this.remedio.ordem = data.ordem;
              this.dbService.save('configuracoes/remedios', this.remedio);
            }
            
            if (local == "atividades") {
              this.atividade.title = data.title, this.atividade.ordem = data.ordem;
              this.dbService.save('configuracoes/atividades', this.atividade);
            }
            if (local == "roles") {
              this.role.title = data.title, this.role.ordem = data.ordem;
              this.dbService.save('configuracoes/atividades', this.role);
            }
            if (local == "estudos") {
              this.estudo.title = data.title, this.estudo.ordem = data.ordem;
              this.dbService.save('configuracoes/estudos', this.estudo);
            }
            if (local == "pessoas") {
              this.pessoa.title = data.title, this.pessoa.ordem = data.ordem;
              this.dbService.save('configuracoes/pessoas', this.pessoa);
            }
          }
        }
      ]
    });
    prompt.present();
  }



  

}
