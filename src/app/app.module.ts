import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdicionarPage } from '../pages/adicionar/adicionar';
import { CardsPage } from '../pages/cards/cards';
import { Graficos1Page } from '../pages/graficos1/graficos1';
import { HojePage } from '../pages/hoje/hoje';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CardsDoMesPage } from '../pages/cards-do-mes/cards-do-mes';
import { FuncoesGeraisProvider } from '../providers/funcoes-gerais/funcoes-gerais';
import { EdicaoPage } from '../pages/edicao/edicao';
import { FilmesPage } from '../pages/filmes/filmes';
import { SeriesPage } from '../pages/series/series';
import { VinhosPage } from '../pages/vinhos/vinhos';
import { ViagensPage } from '../pages/viagens/viagens';
import { TarefasPage } from '../pages/tarefas/tarefas';
import { FilmeEditPage } from '../pages/filme-edit/filme-edit';
import { SerieEditPage } from '../pages/serie-edit/serie-edit';
import { TarefaEditPage } from '../pages/tarefa-edit/tarefa-edit';
import { VinhoEditPage } from '../pages/vinho-edit/vinho-edit';
import { ViagemEditPage } from '../pages/viagem-edit/viagem-edit';
import { LivrosEditPage } from '../pages/livros-edit/livros-edit';
import { LivrosPage } from '../pages/livros/livros';
import { TodasTarefasPage } from '../pages/todas-tarefas/todas-tarefas';
import { RestaurantesEditPage } from '../pages/restaurantes-edit/restaurantes-edit';
import { RestaurantesPage } from '../pages/restaurantes/restaurantes';
import { TimeTrackerEditPage } from '../pages/time-tracker-edit/time-tracker-edit';
import { TimeTrackerPage } from '../pages/time-tracker/time-tracker';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    AdicionarPage,
    CardsPage,
    Graficos1Page,
    HojePage,
    CardsDoMesPage,
    EdicaoPage,
    FilmesPage,
    SeriesPage,
    VinhosPage,
    ViagensPage,
    TarefasPage,
    FilmeEditPage,
    SerieEditPage,
    TarefaEditPage,
    VinhoEditPage,
    ViagemEditPage,
    LivrosEditPage,
    LivrosPage,
    TodasTarefasPage,
    RestaurantesEditPage,
    RestaurantesPage,
    TimeTrackerEditPage,
    TimeTrackerPage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCS77TuCe2jrXqmSDh9Ivs7gWedPM7PJ3E",
      authDomain: "ionic3-gastos-45fd4.firebaseapp.com",
      databaseURL: "https://ionic3-gastos-45fd4.firebaseio.com",
      projectId: "ionic3-gastos-45fd4",
      storageBucket: "ionic3-gastos-45fd4.appspot.com",
      messagingSenderId: "404912444334"
    }

    ),
    AngularFireDatabaseModule
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    AdicionarPage,
    CardsPage,
    Graficos1Page,
    HojePage,
    CardsDoMesPage,
    EdicaoPage,
    FilmesPage,
    SeriesPage,
    VinhosPage,
    ViagensPage,
    TarefasPage,
    FilmeEditPage,
    SerieEditPage,
    TarefaEditPage,
    VinhoEditPage,
    ViagemEditPage,
    LivrosEditPage,
    LivrosPage,
    TodasTarefasPage,
    RestaurantesEditPage,
    RestaurantesPage,
    TimeTrackerEditPage,
    TimeTrackerPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider,
    FuncoesGeraisProvider,
    
    
  ]
})
export class AppModule {}
