import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HojePage } from './hoje';

@NgModule({
  declarations: [
    HojePage,
  ],
  imports: [
    IonicPageModule.forChild(HojePage),
  ],
})
export class HojePageModule {}
