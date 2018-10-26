import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardsDoMesPage } from './cards-do-mes';

@NgModule({
  declarations: [
    CardsDoMesPage,
  ],
  imports: [
    IonicPageModule.forChild(CardsDoMesPage),
  ],
})
export class CardsDoMesPageModule {}
