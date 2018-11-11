import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViagemEditPage } from './viagem-edit';

@NgModule({
  declarations: [
    ViagemEditPage,
  ],
  imports: [
    IonicPageModule.forChild(ViagemEditPage),
  ],
})
export class ViagemEditPageModule {}
