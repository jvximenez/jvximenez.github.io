import { Component } from '@angular/core';
import { AdicionarPage } from '../adicionar/adicionar';
import { CardsPage } from '../cards/cards';
import { NavParams } from 'ionic-angular';
import { AnalisePage } from '../analise/analise';
import { TimeTrackerPage } from '../time-tracker/time-tracker';
import { ResumoSemanalPage } from '../resumo-semanal/resumo-semanal';


@Component({
  templateUrl: 'tabs.html'
  
})
export class TabsPage {
  myIndex

  tab1Root = AdicionarPage;
  tab3Root = CardsPage;
  tab4Root = TimeTrackerPage;
  tab5Root = AnalisePage;
  tab6Root = ResumoSemanalPage;
  

  constructor( navParams: NavParams) {
    this.myIndex = 0;
    if (navParams.data.index) this.myIndex = navParams.data.index;
}

  
}
