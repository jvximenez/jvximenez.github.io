import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VinhosPage } from './vinhos';

@NgModule({
  declarations: [
    VinhosPage,
  ],
  imports: [
    IonicPageModule.forChild(VinhosPage),
  ],
})
export class VinhosPageModule {}
