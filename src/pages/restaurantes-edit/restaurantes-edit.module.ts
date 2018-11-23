import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestaurantesEditPage } from './restaurantes-edit';

@NgModule({
  declarations: [
    RestaurantesEditPage,
  ],
  imports: [
    IonicPageModule.forChild(RestaurantesEditPage),
  ],
})
export class RestaurantesEditPageModule {}
