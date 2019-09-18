import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { ConfiguracoesEditPage } from '../configuracoes-edit/configuracoes-edit';
import  firebase  from 'firebase';

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
    'ordem':Number(''),
  }
  public remedio = {
    'title':'',
    'check':true,
    'ordem':Number(''),
  }
  public dente = {
    'title':'',
    'check':true,
    'ordem':Number(''),
  }
  public atividade = {
    'title':'',
    'check':true,
    'ordem':Number(''),
  }
  public role = {
    'title':'',
    'check':true,
    'ordem':Number(''),
  }
  public estudo = {
    'title':'',
    'check':true,
    'ordem':Number(''),
  }
  public pessoa = {
    'title':'',
    'check':true,
    'ordem':Number(''),
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
    'title':Number(''),
  }
  public show ={
    'title':'',
    'check':true,
    'ordem':Number('')
  }

  parametros

  public tarefas;dentes; remedios; atividades; roles; estudos; pessoas; viagens; cidades; dias;shows
  public PessoasRef
  pessoasList

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbService: FirebaseServiceProvider, public alertCtrl: AlertController,public actionSheetCtrl: ActionSheetController) {
    this.PessoasRef = firebase.database().ref('/configuracoes/pessoas').limitToLast(100).orderByChild("ordem")


    this.PessoasRef.on('value', pessoasList => {
      let pessoasM = [];
      let count = 0
      pessoasList.forEach( pessoas => {
        count += 1 
        var obj
        obj = pessoas.val()
        obj.key = pessoas.key
        pessoasM.push(obj);
        
        return false;
      });
    
      this.pessoasList = pessoasM;
  
    });
    
    
    this.remedios=this.dbService.getAll('configuracoes/remedios','ordem')
    this.dentes=this.dbService.getAll('configuracoes/dentes','ordem')
    this.atividades=this.dbService.getAll('configuracoes/atividades','ordem')
    this.roles=this.dbService.getAll('configuracoes/roles','ordem')
    this.estudos=this.dbService.getAll('configuracoes/estudos','ordem')
    this.pessoas=this.dbService.getAll('configuracoes/pessoas','ordem')
    this.viagens=this.dbService.getAll('configuracoes/viagens','ordem')
    this.tarefas= this.dbService.getAll('configuracoes/tarefas','ordem')
    this.shows= this.dbService.getAll('configuracoes/shows','ordem')

    this.pessoas.subscribe(res => console.log(res))

    this.parametros = [{title: 'atalho'},
    {title: 'categoria'},
    {title: 'configuracoes'},
    {title: 'diario'},
    {title: 'filmes'},
    {title: 'livros'},
    {title: 'pagamento'},
    {title: 'previsao'},
    {title: 'restaurantes'},
    {title: 'series'},
    {title: 'tarefas'},
    {title: 'trackers'},
    {title: 'vinhos'},
    {title: 'visual'},
    {title: 'restaurantes'},
    ]
    

    /** this.OrdemNumber() */
  }


  Atualizar(tarefas,nome){
    if (nome == 'remedios'){
      this.dbService.update('configuracoes/remedios',tarefas)
    }
    if (nome == 'dentes'){
      this.dbService.update('configuracoes/dentes',tarefas)
    }
    if (nome == 'atividades'){
      this.dbService.update('configuracoes/atividades',tarefas)
    }
    if (nome == 'roles'){
      this.dbService.update('configuracoes/roles',tarefas)
    }
    if (nome == 'estudos'){
      this.dbService.update('configuracoes/estudos',tarefas)
    }
    if (nome == 'pessoas'){
      this.dbService.update('configuracoes/pessoas',tarefas)
    }
    if (nome == 'viagens'){
      this.dbService.update('configuracoes/viagens',tarefas)
    }
    if (nome == 'tarefas'){
      this.dbService.update('configuracoes/tarefas',tarefas)
    }
    if (nome == 'shows'){
      this.dbService.update('configuracoes/shows',tarefas)
    }
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
            if (local == "dentes"){
              this.dente.title = data.title, this.dente.ordem = data.ordem;
              this.dbService.save('configuracoes/dentes', this.dente);
            }
            
            if (local == "atividades") {
              this.atividade.title = data.title, this.atividade.ordem = data.ordem;
              this.dbService.save('configuracoes/atividades', this.atividade);
            }
            if (local == "roles") {
              this.role.title = data.title, this.role.ordem = data.ordem;
              this.dbService.save('configuracoes/roles', this.role);
            }
            if (local == "estudos") {
              this.estudo.title = data.title, this.estudo.ordem = data.ordem;
              this.dbService.save('configuracoes/estudos', this.estudo);
            }
            if (local == "pessoas") {
              this.pessoa.title = data.title, this.pessoa.ordem = Number(data.ordem);
              this.dbService.save('configuracoes/pessoas', this.pessoa);
            }
            if (local == "shows") {
              this.show.title = data.title, this.show.ordem = Number(data.ordem);
              this.dbService.save('configuracoes/shows2', this.show);
            }
          }
        }
      ]
    });
    prompt.present();
  }

  OrdemNumber(){
  this.tarefas.forEach(element => { element.forEach(item => {item.ordem = Number(item.ordem); this.dbService.update('configuracoes/tarefas',item) })})
  this.remedios.forEach(element => { element.forEach(item => {item.ordem = Number(item.ordem); this.dbService.update('configuracoes/remedios',item) })})
  this.atividades.forEach(element => { element.forEach(item => {item.ordem = Number(item.ordem); this.dbService.update('configuracoes/atividades',item) })})
  this.roles.forEach(element => { element.forEach(item => {item.ordem = Number(item.ordem); this.dbService.update('configuracoes/roles',item) })})
  this.estudos.forEach(element => { element.forEach(item => {item.ordem = Number(item.ordem); this.dbService.update('configuracoes/estudos',item) })})
  this.pessoas.forEach(element => { element.forEach(item => {item.ordem = Number(item.ordem); this.dbService.update('configuracoes/pessoas',item) })})
  this.dentes.forEach(element => { element.forEach(item => {item.ordem = Number(item.ordem); this.dbService.update('configuracoes/dentes',item) })})}



  CriaTarefa(){
    const prompt = this.alertCtrl.create({
      title: 'Nova Tarefa',
      message: "Entre com o nome e ordem",
      inputs: [
        {
          name: 'title',
          placeholder: 'Nome',

        },
        {
          name: 'nivel',
          placeholder:"Nivel"
        },
        {
          name: 'categoria',
          placeholder:"Categoria"
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
            this.tarefa.title = data.title, this.tarefa.ordem = data.ordem;this.tarefa.nivel = data.nivel; this.tarefa.categoria = data.categoria;
            this.dbService.save('configuracoes/tarefas', this.tarefa);
          }
        }
      ]
    });
    prompt.present();
  }


  GoToEdit(edicao){
    this.navCtrl.push(ConfiguracoesEditPage, 
      {'edicao' : edicao})
  }



  Opcoes(track,local){
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Opções',
      buttons: [

        {
          text: 'Deletar',
          
          handler: () => {
            this.Deletar(track,local);
          }
          
        }, {
          text: 'Editar',
          
          handler: () => {
            this.EditarProp(track,local);
          }
          
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    actionSheet.present();
  }


  Deletar(track,local){
    console.log(track.key,local,String('configuracoes/'+local))
    this.dbService.revome(String('configuracoes/'+local),track)
  }


  CriaBackup(){
    var obs
    var backup = []
    
    this.parametros.forEach(nome => {
      obs = this.dbService.getAll(nome.title,'total');
      obs.forEach(element => {backup.push(element)})
      
    })

    var array = [this.parametros,this.parametros]

    
    setTimeout(() =>{
      this.dbService.save('backup',backup)
      console.log('enviei',this.parametros)
  }, 10000);
  
    

  }

  EditarProp(track,local){
    const prompt = this.alertCtrl.create({
      title: 'Editar:'+String(local),
      message: "Entre com o nome e ordem",
      inputs: [
        {
          name: 'title',
          placeholder: track.title,
          value:track.title,



        },
        {
          name: 'ordem',
          placeholder: track.ordem,
          value: track.ordem,
          type: 'number',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Atualizar',
          handler: data => {
            track.title = data.title;
            track.ordem = Number(data.ordem);
            this.dbService.update(String('configuracoes/'+local),track)
            }
          }
        
      ]
    });
    prompt.present();
  }






  reorderItems(indexes,local) {
    let element = this.pessoas[indexes.from];
    let a = 1
    this.pessoas.forEach(elements => {elements.forEach(element => {element.ordem = a ;a+=1;this.dbService.update(String('configuracoes/'+local),element)

    });
      
    });

    console.log(indexes,element)
    if (indexes.from < indexes.to){
      this.pessoas.forEach(elements => {elements.forEach(element => { var continua = true; if(element.ordem-1 == indexes.from) {element.ordem = indexes.to+1; continua = false}; if( continua == true && element.ordem < indexes.to) {element.ordem -= 1}})})
      this.pessoas.forEach(elements => {elements.forEach(element => {this.dbService.update(String('configuracoes/'+local),element)})})
    }


  }


  reorderItems2(indexes,local){
    console.log("ola")
    let a = 0
    let element = this.pessoasList[indexes.from];
    this.pessoasList.splice(indexes.from, 1);
    this.pessoasList.splice(indexes.to, 0, element);
    console.log(this.pessoasList)

    this.pessoasList.forEach(element => { element.ordem = a + 1; a+=1; this.dbService.update(String('configuracoes/'+local),element)
      
    });
  }



  

}
