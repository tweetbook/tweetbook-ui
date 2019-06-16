import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineRoutingModule } from './timeline-routing.module';
import { PageTimelineComponent } from './page-timeline/page-timeline.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    TimelineRoutingModule
  ],
  declarations: [PageTimelineComponent],
})
export class TimelineModule { }
