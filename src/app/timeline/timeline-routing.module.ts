import { NgModule } from '@angular/core';
import {Routes, RouterModule, RouterOutlet} from '@angular/router';
import {PageTimelineComponent} from './page-timeline/page-timeline.component';
import {PlainRouterOutletComponent} from '../shared/plain-router-outlet/plain-router-outlet.component';

const routes: Routes = [
  {
    path: '',
    component: PlainRouterOutletComponent,
    children: [
      {
        path: '',
        component: PageTimelineComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimelineRoutingModule { }
