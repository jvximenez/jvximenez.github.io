import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { TimeTrackerEditPage } from '../time-tracker-edit/time-tracker-edit';
import { TodosTrackersPage } from '../todos-trackers/todos-trackers';
import { StatusBar } from '@ionic-native/status-bar';
import { ConfiguracoesPage } from '../configuracoes/configuracoes';
import { TarefaEditPage } from '../tarefa-edit/tarefa-edit';

/**
 * Generated class for the TimeTrackerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-time-tracker',
  templateUrl: 'time-tracker.html',
})
export class TimeTrackerPage {
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

  tarefa = {
    'dia':'',
    'mes':'',
    'ano':'',
    'total':'',
    'parcial':'',
    'title':'',
    'limite':'',
    'nivel': 0,
    'detalhes':'',
    'check': false,
    'finalT':'',
  }
  input ={
    'title':''
  }

  public trackers
  public totalM; totalO
  

  public select;dias;hoje;ontem;amanha
  public atalhos
  public show = false
  public Indicadores;IndicadoresO

  public ShowTarefas;ShowBo
  public tarefas


  public testao
  public hora

  public VerM
  public contador

  

  constructor(public statusBar:StatusBar,public alertCtrl: AlertController , public navCtrl: NavController, public navParams: NavParams, public dbService: FirebaseServiceProvider, public actionSheetCtrl: ActionSheetController) {
    this.VerM = false
    

    this.ShowTarefas = this.dbService.getAll('configuracoes/shows','nivel')
   

    this.trackers = this.dbService.getAllEspecificoMsm('trackers','total',50).map(b => b.reverse()).map(a => a.sort(function(a, b) {return Number(String(b['Hinicio']+b['Minicio']/60))- Number(String(a['Hinicio']+a['Minicio']/60))}))
    this.statusBar.backgroundColorByHexString('#ffffff');
    this.atalhos = this.dbService.getAll('configuracoes/tarefas','nivel')
    this.Indicadores = this.Calcula(this.Total());
    this.IndicadoresO=this.Calcula(this.Total()-1);

    this.tarefas = this.dbService.getAllEspecificoMsm('tarefas','total',10).map(b => b.reverse())

   this.testao = Number(0.4)


    this.dias = [{title: "Hoje"},
      {title:"Ontem"},
      {title: "Amanha"}
    ]

    
   

    this.hoje =  this.Total();
    this.amanha = this.Total3();
    this.ontem = this.Total2();

    this.totalM = this.TotalHoras(this.hoje)
    this.totalO = this.TotalHoras(this.ontem)
    this.ngAfterViewInit()

    this.hora = this.GetHora()

    this.contador=this.ContaPendentes()

    
    
   
    
   

    
    

  }

  GetHora(){
    var a = new Date
    var b
    b = a.getHours() + a.getMinutes()/60
    b = b/24
    console.log(b)
    return (b)

  }


  CorIfTrue(dado){
    if (dado ==  true){
      return "primary"
    }
    if (dado !=  true){
      return ""
    }
  }

  ChangeCheckTarefas(tarefa){
    tarefa.check = !tarefa.check
    this.dbService.update('configuracoes/shows',tarefa)
  }

  doRefresh(refresher) {
    this.show = !this.show

    setTimeout(() => {
      refresher.complete();
    }, 50);
  }

  atalho(atalho){
    this.tracker.nivel = atalho.nivel
    this.input.title = atalho.title
    this.Criacao(this.tracker)


  }

  Calcula(dia){
    var array = [0,0,0,0,0,0,0,0,0,0,0]
     this.trackers.forEach(itens => itens.forEach(item => {
       if(item.title.includes("Dormir") && item.total == dia)
       {array[0] += item.duracao}; 
       if(item.title.includes("Banho") && item.total == dia)
       {array[1] += item.duracao};
       if(item.title.includes("Ler") && item.total == dia)
       {array[2] += item.duracao};
       if(item.title.includes("Programar") && item.total == dia)
       {array[3] += item.duracao};
       if(item.title.includes("Frances") && item.total == dia)
       {array[4] += item.duracao};
       if(item.title.includes("Ingles") && item.total == dia)
       {array[5] += item.duracao};
       if(item.title.includes("Aula") && item.total == dia)
       {array[6] += item.duracao};
       if(item.title.includes("Relaxar") && item.total == dia)
       {array[7] += item.duracao};
       if(item.title.includes("Tempinho") && item.total == dia)
       {array[8] += item.duracao};
       if(item.title.includes("Dani") && item.total == dia)
       {array[9] += item.duracao};
       if(item.title.includes("Estudar") && item.total == dia)
       {array[10] += item.duracao};}))
      return array
  }

  Arredonda(val){
    var b;
    b = (Math.round(val*100)/100)
    return b
  }
  ngAfterViewInit(){
    setTimeout(()=> {
      this.teste(this.totalM);
      this.teste2(this.totalO)
    },800)
}


  teste(array){
    
    var a1 = (String(array[0]/0.24)+'%')
    var a2 = (String((array[0]+array[1])/0.24)+'%')
    var a3 = (String((array[0]+array[1]+array[2])/0.24)+'%')
    var a4 = (String((array[0]+array[1]+array[2]+array[3])/0.24)+'%')
    var a5 = (String((array[0]+array[1]+array[2]+array[3]+array[4])/0.24)+'%')
    var a6 = (String((array[0]+array[1]+array[2]+array[3]+array[4]+array[5])/0.24)+'%')
    var a7 = String((this.GetHora())*100+'%')
    console.log (a7)
    
    
    document.getElementById("teste1").style.width = a1
    document.getElementById("teste2").style.width = a2
    document.getElementById("teste3").style.width = a3
    document.getElementById("teste4").style.width = a4
    document.getElementById("teste5").style.width = a5
    document.getElementById("teste6").style.width = a6
    document.getElementById("testeH").style.width = a7
  }

  teste2(array){
    
    
    var a1 = (String(array[0]/0.24)+'%')
    var a2 = (String((array[0]+array[1])/0.24)+'%')
    var a3 = (String((array[0]+array[1]+array[2])/0.24)+'%')
    var a4 = (String((array[0]+array[1]+array[2]+array[3])/0.24)+'%')
    var a5 = (String((array[0]+array[1]+array[2]+array[3]+array[4])/0.24)+'%')
    var a6 = (String((array[0]+array[1]+array[2]+array[3]+array[4]+array[5])/0.24)+'%')
    
    
    
    
    document.getElementById("teste7").style.width = a1
    document.getElementById("teste8").style.width = a2
    document.getElementById("teste9").style.width = a3
    document.getElementById("teste10").style.width = a4
    document.getElementById("teste11").style.width = a5
    document.getElementById("teste12").style.width = a6
  }


  TotalHoras(total){
    var array = [0,0,0,0,0,0]
    this.trackers.forEach(itens => {itens.forEach(item => {if (item.total == total && item.duracao > 0) {array[(Number(item.nivel)+2)] += Number(item.duracao)}})})
    return array
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


  Data(){
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();
    var array = [dia,mes,ano];
    return array
    
  }

  Criacao(tarefa){
    var array = this.Data();
    this.tracker.title = this.input.title
    this.tracker.dia = String(array[0]);
    this.tracker.mes = String(array[1]);
    this.tracker.ano = String(array[2]);
    this.tracker.total = String(this.Total());
    this.tracker.parcial =  String(this.Parcial());
    this.dbService.save('trackers',tarefa)
    this.input.title = ""
    this.tracker.Hinicio = Number('')
    this.tracker.Minicio = Number('')

  }

  CriacaoTarefa(tarefa){
    var array = this.Data();
    this.tarefa.title = this.input.title
    this.tarefa.dia = String(array[0]);
    this.tarefa.mes = String(array[1]);
    this.tarefa.ano = String(array[2]);
    this.tarefa.total = String(this.Total());
    this.tarefa.parcial =  String(this.Parcial());
    this.dbService.save('tarefas',tarefa)
    this.input.title = ""
    

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

  Total3(){
    var total;
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth();
    var ano = data.getFullYear();
    total = Number(ano*10000 + (mes+1)*100 + dia+1);
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

  Ontem(tarefa){
    var array = this.Data();
    this.tracker.title = this.input.title
    this.tracker.dia = String(array[0]-1);
    this.tracker.mes = String(array[1]);
    this.tracker.ano = String(array[2]);
    this.tracker.total = String(this.Total2());
    this.tracker.parcial =  String(this.Parcial());
    this.dbService.save('trackers',tarefa)
    this.input.title = ""

    
  }

  Amanha(tarefa){
    var array = this.Data();
    this.tracker.title = this.input.title
    this.tracker.dia = String(array[0]+1);
    this.tracker.mes = String(array[1]);
    this.tracker.ano = String(array[2]);
    this.tracker.total = String(this.Total3());
    this.tracker.parcial =  String(this.Parcial());
    this.dbService.save('trackers',tarefa)
    this.input.title = ""

    
  }

  goToEdit(itens){
    this.navCtrl.push(TimeTrackerEditPage, 
    {'tracker' : itens})
  }

  goToEditT(itens){
    this.navCtrl.push(TarefaEditPage, 
    {'tarefa' : itens})
  }

  goToTotal(){
    this.navCtrl.push(TodosTrackersPage)
  }




  

  Atualizar(tarefas){
    this.dbService.update('trackers',tarefas)
    this.contador = this.ContaPendentes()
    this.AtualizaGraf()
    }

  AtualizarT(tarefas){
    this.dbService.update('tarefas',tarefas)
    this.contador = this.ContaPendentes()
    }

  Deletar(tarefas){
    this.dbService.revome('trackers',tarefas)
    this.contador = this.ContaPendentes()
    this.AtualizaGraf()
    }

  DeletarT(tarefas){
    this.dbService.revome('tarefas',tarefas)
    this.contador = this.ContaPendentes()
    }
  

  atualiza(){
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
    }

  RetornaDia(dia){
    if(dia=="Hoje"){
    return (this.hoje)}
    if(dia=="Amanha"){
    return (this.amanha)}
    if(dia=="Ontem"){
    return (this.ontem)}
    
    
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
      this.Indicadores = this.Calcula(this.Total());

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

  AlteraNivel(track,Nivel){
    track.nivel = Nivel
    this.dbService.update('trackers',track)

  }

  Nivel(Nivel){
    this.tracker.nivel = Nivel

  }

  goToSettings(){
    this.navCtrl.push(ConfiguracoesPage)
  }

  AlterarNome(track, nome){
    track.title = nome;
    this.dbService.update('trackers',track)

  }

  CriaNovo(track){
    this.tracker.Hinicio = track.Hfim
    this.tracker.Minicio = track.Mfim
    this.tracker.total = track.total
    this.tracker.dia = track.dia
    this.Criacao(this.tracker);
  }



  VerMais(item){
    if (item == false){
      this.VerM = true
      this.tarefas = this.dbService.getAllEspecificoMsm('tarefas','total',1000).map(b => b.reverse())
      
    }
    else{
      this.VerM = false
      this.tarefas = this.dbService.getAllEspecificoMsm('tarefas','total',10).map(b => b.reverse())
    }

    
  }

  ValorVerMais(item){
    if (item == false){
      return ("Ver mais")
    }
    if (item == true){
      return ("Ver menos")
    }

  }


  ContaPendentes(){
    var contador = [0]
    this.tarefas.forEach(itens => itens.forEach(item => {if(item.check == false){contador[0]+=1}}))
    return contador

  }

  

  



















  Opcoes(track){
    const actionSheet = this.actionSheetCtrl.create({
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


  OpcoesT(track){
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Opções',
      buttons: [
        {
          text: 'Criar Tracker',
          
          handler: () => {
            this.input.title = track.title;
            this.tracker.nivel = track.nivel;

            this.Criacao(this.tracker);
          }
          
        },
        {
          text: 'Deletar',
          
          handler: () => {
            this.DeletarT(track);
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

  AtualizaGraf(){
    setTimeout(() => {
      this.Indicadores = this.Calcula(this.Total());
      this.IndicadoresO=this.Calcula(this.Total()-1);
      this.totalM = this.TotalHoras(this.hoje)
      this.totalO = this.TotalHoras(this.ontem)
      this.ngAfterViewInit()
      
    }, 50);
    

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
          this.AtualizaGraf()
          }
      }]});
      prompt.present();
  }


  AlteraHora(track){
    const prompt = this.alertCtrl.create({
      title: 'Hora',
      message: "Entre com a hora",
      inputs: [
        {
          name: 'hora1',
          placeholder: (track.Hinicio+"."+track.Minicio),
          type: 'number',
        },
        {
          name: 'hora2',
          placeholder: (track.Hfim+','+track.Mfim),
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
            if (data.hora1 > 0){
              track.Hinicio = data.hora1.split('.')[0];
              track.Minicio = data.hora1.split('.')[1];
            }
            if (data.hora2 > 0){
              track.Hfim = data.hora2.split('.')[0];
              track.Mfim = data.hora2.split('.')[1];
            }

            if (track.Mfim > 0){
            var dura = String(Math.round((Number(track.Hfim) + Math.round((Number(track.Mfim)/60)*10000)/10000 - Number(track.Hinicio) - Math.round((Number(track.Minicio)/60)*10000)/10000)*10000)/10000)
            track.duracao = dura;
            track.check = true
          }
            
            this.dbService.update('trackers',track)
            this.AtualizaGraf()
          }
        }
      ]
    });
    prompt.present();
  }

}
   








