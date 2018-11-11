import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SerieEditPage } from './serie-edit';

@NgModule({
  declarations: [
    SerieEditPage,
  ],
  imports: [
    IonicPageModule.forChild(SerieEditPage),
  ],
})
export class SerieEditPageModule {}
