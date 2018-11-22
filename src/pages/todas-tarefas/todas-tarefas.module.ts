import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodasTarefasPage } from './todas-tarefas';

@NgModule({
  declarations: [
    TodasTarefasPage,
  ],
  imports: [
    IonicPageModule.forChild(TodasTarefasPage),
  ],
})
export class TodasTarefasPageModule {}
