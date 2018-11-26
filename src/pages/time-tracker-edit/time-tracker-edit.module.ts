import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimeTrackerEditPage } from './time-tracker-edit';

@NgModule({
  declarations: [
    TimeTrackerEditPage,
  ],
  imports: [
    IonicPageModule.forChild(TimeTrackerEditPage),
  ],
})
export class TimeTrackerEditPageModule {}
