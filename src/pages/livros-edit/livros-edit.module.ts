import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LivrosEditPage } from './livros-edit';

@NgModule({
  declarations: [
    LivrosEditPage,
  ],
  imports: [
    IonicPageModule.forChild(LivrosEditPage),
  ],
})
export class LivrosEditPageModule {}
