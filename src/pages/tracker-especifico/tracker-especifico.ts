import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { TimeTrackerEditPage } from '../time-tracker-edit/time-tracker-edit';

/**
 * Generated class for the TrackerEspecificoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tracker-especifico',
  templateUrl: 'tracker-especifico.html',
})
export class TrackerEspecificoPage {
  public total
  public trackers
  public Indicadores;IndicadoresO
  input ={
    'title':''
  }

  tracker = {
    'dia':'',
    'mes':'',
    'ano':'',
    'total':'',
    'parcial':'',
    'title':'',
    'Hinicio':Number(''),
    'Minicio':Number(''),
    'Hfim':'',
    'Mfim':'',
    'nivel': 0,
    'duracao':0,
    'check': false,

  }
  actionSheetControler: any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbService: FirebaseServiceProvider, public alertCtrl: AlertController) {
    this.total = this.navParams.get('total')
    this.trackers =  this.navParams.get('trackers')
    
  }

  GetHora(){
    var a = new Date
    var b
    b = a.getHours() + a.getMinutes()/60
    b = b/24
    console.log(b)
    return (b)

  }


  

  ChangeCheckTarefas(tarefa){
    tarefa.check = !tarefa.check
    this.dbService.update('configuracoes/shows',tarefa)
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TrackerEspecificoPage');
  }

  Cor(n){
    if (n == -2){
      return 'dangerM'
    }
    if (n == -1){
      return 'danger'
    }
    if (n == 0){
      return 'dark'
    }
    if (n == 1){
      return 'primary'
    }
    if (n == 2){
      return 'primaryM'
    }
    if (n == 3){
      return 'verde'
    }
  }

  Icone(track){
    if(track.Minicio != '' && track.Mfim !=''){
      return('checkmark-circle-outline')
    }
   if(track.Minicio == ''){
        return('play'); 
      }
    if(track.Minicio != '' && track.Mfim ==''){
      return('pause')
    }
  }



  CorIfTrue(dado){
    if (dado ==  true){
      return "primary"
    }
    if (dado !=  true){
      return ""
    }
  }

  AlteraNivel(track,Nivel){
    track.nivel = Nivel
    this.dbService.update('trackers',track)

  }

  Nivel(Nivel){
    this.tracker.nivel = Nivel

  }

  Criacao(tarefa){
    this.tracker.title = this.input.title
    this.tracker.dia = this.total.substr(6,2)
    this.tracker.mes = this.total.substr(4,2)
    this.tracker.ano = this.total.substr(0,4)
    this.tracker.total = this.total
    this.tracker.parcial =  this.total.substr(0,4)+this.total.substr(4,2)
    this.dbService.save('trackers',tarefa)
    this.input.title = ""
    this.tracker.Hinicio = Number('')
    this.tracker.Minicio = Number('')

  }

  goToEdit(itens){
    this.navCtrl.push(TimeTrackerEditPage, 
    {'tracker' : itens})
  }

  Atualizar(tarefas){
    this.dbService.update('trackers',tarefas)
    }
  
  Deletar(tarefas){
    this.dbService.revome('trackers',tarefas)
    }

    RetornaH(duracao){
      if (duracao == 0){
        return (" ")
      }
      else{
      var min2
      var inteiro = parseInt(duracao)
      var min = Math.round((duracao - inteiro)*60)
      min2 = String(min)
      if (min < 10) {min2 = String("0"+min)}
      return (inteiro+"h"+min2)}
    }
  
  
    Comecar(track){
      
      if (track.Minicio != '' && track.Hfim == ''){
        track.Hfim = this.RetornaHora()
        track.Mfim = Math.round(this.RetornaMin()*100)/100
        track.check = true
        track.duracao = (Math.round((Number(track.Hfim) + Math.round((Number(track.Mfim)/60)*10000)/10000 - Number(track.Hinicio) - Math.round((Number(track.Minicio)/60)*10000)/10000)*10000)/10000)
  
      if (Number(track.duracao) <= 0)
        {track.duracao = 24 - Number(track.Hinicio)- Number(track.Minicio)/60}
      } 
      if (track.Minicio == ''){
        track.Hinicio = this.RetornaHora()
        track.Minicio = Math.round(this.RetornaMin()*100)/100}
        this.dbService.update('trackers',track)
       
  
    }
  
    
  
    RetornaHora(){
      var data = new Date();
      var hora = data.getHours();
      return (hora)
     
    }
    RetornaMin(){
      var data = new Date();
      var min = data.getMinutes();
      var segundo = data.getSeconds();
      return (min + segundo/60)
     
    }

    CriaNovo(track){
      this.tracker.Hinicio = track.Hfim
      this.tracker.Minicio = track.Mfim
      this.Criacao(this.tracker);
    }


    Opcoes(track){
      const actionSheet = this.actionSheetControler.create({
        title: 'Opções',
        buttons: [
          {
            text: 'Copiar',
            
            handler: () => {
              this.input.title = track.title;
              this.tracker.nivel = track.nivel;
              this.Criacao(this.tracker);
            }
            
          },
          {
            text: 'Deletar',
            
            handler: () => {
              this.Deletar(track);
            }
            
          },{
            text: 'Limpar final',
            handler: () => {
              track.Hfim = '';
              track.Mfim = '';
              this.dbService.update('trackers',track);
            }
          },{
            text:"Alterar Horários",
            handler:() => {this.AlteraHora(track)}
          },{
            text: 'Limpar tudo',
            handler: () => {
              track.Hfim = '';
              track.Mfim = '';
              track.Hinicio = '';
              track.Minicio = '';
              track.duracao = '';
              this.dbService.update('trackers',track);
              
            }
          },{
            text: 'Alterar Nível',
            handler: () => {
              this.AlteraNivelradio(track);
            }
          },{
            text: 'Relaxar',
            handler: () => {
              this.AlteraNivel(track,"-2");
              this.AlterarNome(track, 'Relaxar');
            }
          },{
            text: 'Criar Novo',
              handler: () => {
              this.PromptCriarNovo(track)
             
            }
          },{
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
            }
          }
        ]
      });
      actionSheet.present();
    }


    AlterarNome(track, nome){
      track.title = nome;
      this.dbService.update('trackers',track)
  
    }



    PromptCriarNovo(track){
      const prompt = this.alertCtrl.create({
        title: 'Novo tracker',
        inputs: [
          {
            name: 'title',
            placeholder: 'Nome'
          },{
            name: 'nivel',
            placeholder:'Nível'
          }
        ],
        buttons: [
          {
            text: 'Cancelar',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Relaxar',
            handler: data => {
              this.input.title = "Relaxar", this.tracker.nivel = -2;
              this.CriaNovo(track)
              
            }
          },
          {
            text: 'Salvar',
            handler: data => {
              this.input.title = data.title, this.tracker.nivel = data.nivel;
              this.CriaNovo(track)
            }
          }
        ]
      });
      prompt.present();
    }
  
  
    Atual(track){
      if (track.Minicio != '' && track.Mfim == ''){
        var Hfim = this.RetornaHora()
        var Mfim = Math.round(this.RetornaMin()*100)/100
        var dura = (Math.round((Number(Hfim) + Math.round((Number(Mfim)/60)*10000)/10000 - Number(track.Hinicio) - Math.round((Number(track.Minicio)/60)*10000)/10000)*10000)/10000)
        return (dura);
      } 
      if (track.Duracao != ''){
        return(" ")
  
      } 
    }
    

    AlteraHora(track){
      const prompt = this.alertCtrl.create({
        title: 'Hora',
        message: "Entre com a hora",
        inputs: [
          {
            name: 'hora1',
            placeholder: track.Hinicio,
            type: 'number',
          },
          {
            name: 'hora2',
            placeholder: track.Hfim,
            type: 'number',
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
  
            }
          },
          {
            text: 'Save',
            handler: data => {
              track.Hinicio = data.hora1.split('.')[0];
              track.Hfim = data.hora2.split('.')[0];
              track.Minicio = data.hora1.split('.')[1];
              track.Mfim = data.hora2.split('.')[1];
  
              if (track.Mfim > 0){
              var dura = (Math.round((Number(track.Hfim) + Math.round((Number(track.Mfim)/60)*10000)/10000 - Number(track.Hinicio) - Math.round((Number(track.Minicio)/60)*10000)/10000)*10000)/10000)
              track.duracao = dura;
              track.check = true
            }
              
              this.dbService.update('trackers',track)
             
            }
          }
        ]
      });
      prompt.present();
    }



    AlteraNivelradio(track){
      let prompt = this.alertCtrl.create({
        title: 'Alterando Nível',
        message: 'Selecione a opção',
        inputs : [
        {
            type:'radio',
            label:'Nível 2',
            value:'2'
        },
        {
          type:'radio',
          label:'Nível 1',
          value:'1'
      },
        {
          type:'radio',
          label:'Nível 0',
          value:'0'
        },  
        {
          type:'radio',
          label:'Nível -1',
          value:'-1'
      },
      {
        type:'radio',
        label:'Nível -2',
        value:'-2'
      },
      {
        type:'radio',
        label:'Necessario',
        value:'3'
      }],
        buttons : [
        {
            text: "Cancel",
            handler: data => {
            console.log("cancel clicked");
            }
        },
        {
            text: "Salvar",
            handler: data => {
              track.nivel = data
            this.dbService.update('trackers',track)
            
            }
        }]});
        prompt.present();
    }



  
  

}
