import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodosTrackersPage } from './todos-trackers';

@NgModule({
  declarations: [
    TodosTrackersPage,
  ],
  imports: [
    IonicPageModule.forChild(TodosTrackersPage),
  ],
})
export class TodosTrackersPageModule {}
