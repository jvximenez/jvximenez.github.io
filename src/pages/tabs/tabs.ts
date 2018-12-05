import { Component } from '@angular/core';
import { AdicionarPage } from '../adicionar/adicionar';
import { HojePage } from '../hoje/hoje';
import { CardsPage } from '../cards/cards';
import { TarefasPage } from '../tarefas/tarefas';
import { NavParams } from 'ionic-angular';
import { TimeTrackerPage } from '../time-tracker/time-tracker';


@Component({
  templateUrl: 'tabs.html'
  
})
export class TabsPage {
  myIndex

  tab1Root = AdicionarPage;
  tab2Root = HojePage;
  tab3Root = CardsPage;
  tab4Root = TimeTrackerPage;

  constructor( navParams: NavParams) {
    this.myIndex = 0;
    if (navParams.data.index) this.myIndex = navParams.data.index;
}

  
}
