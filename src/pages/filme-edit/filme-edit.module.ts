import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilmeEditPage } from './filme-edit';

@NgModule({
  declarations: [
    FilmeEditPage,
  ],
  imports: [
    IonicPageModule.forChild(FilmeEditPage),
  ],
})
export class FilmeEditPageModule {}
