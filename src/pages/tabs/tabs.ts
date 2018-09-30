import { Component } from '@angular/core';
import { AdicionarPage } from '../adicionar/adicionar';
import { HojePage } from '../hoje/hoje';
import { CardsPage } from '../cards/cards';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AdicionarPage;
  tab2Root = HojePage;
  tab3Root = CardsPage;

  constructor() {

  }
}
