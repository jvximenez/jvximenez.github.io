import { Component, ViewChild } from '@angular/core';
import { Platform, Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { FilmesPage } from '../pages/filmes/filmes';
import { SeriesPage } from '../pages/series/series';
import { TarefasPage } from '../pages/tarefas/tarefas';
import { VinhosPage } from '../pages/vinhos/vinhos';
import { ViagensPage } from '../pages/viagens/viagens';
import { LivrosPage } from '../pages/livros/livros';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = TabsPage;
  testemesmo: any
  
  

  
  constructor( public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {


    

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  abrirFilmes(){
    this.nav.setRoot(FilmesPage)
  }

  abrirSeries(){
    this.nav.setRoot(SeriesPage)
  }

  abrirTarefa(){
    this.nav.setRoot(TarefasPage)
  }
  abrirVinhos(){
    this.nav.setRoot(VinhosPage)
  }
  abrirViagens(){
    this.nav.setRoot(ViagensPage)
  }

  abrirRoot(){
    this.nav.setRoot(TabsPage)
  }

  AbrirLivros(){
    this.nav.setRoot(LivrosPage)
  }


}
