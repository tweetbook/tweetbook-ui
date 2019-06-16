import {NgModule} from '@angular/core';

import {CoreRoutingModule} from './core-routing.module';
import {HeaderComponent} from './presentational/header/header.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    SharedModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
