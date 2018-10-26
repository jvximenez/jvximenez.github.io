import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';

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


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    AdicionarPage,
    CardsPage,
    Graficos1Page,
    HojePage,
    CardsDoMesPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
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
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider,
    
  ]
})
export class AppModule {}
