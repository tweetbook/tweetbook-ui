import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MatToolbarModule} from '@angular/material';
import { PlainRouterOutletComponent } from './plain-router-outlet/plain-router-outlet.component';

const AngularMaterialModules = [
  MatToolbarModule
];

@NgModule({
  declarations: [
    PlainRouterOutletComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    ...AngularMaterialModules,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    ...AngularMaterialModules,
    PlainRouterOutletComponent
  ]
})
export class SharedModule { }
