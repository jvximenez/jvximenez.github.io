import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VinhoEditPage } from './vinho-edit';

@NgModule({
  declarations: [
    VinhoEditPage,
  ],
  imports: [
    IonicPageModule.forChild(VinhoEditPage),
  ],
})
export class VinhoEditPageModule {}
