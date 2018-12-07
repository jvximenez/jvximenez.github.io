import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfiguracoesEditPage } from './configuracoes-edit';

@NgModule({
  declarations: [
    ConfiguracoesEditPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfiguracoesEditPage),
  ],
})
export class ConfiguracoesEditPageModule {}
