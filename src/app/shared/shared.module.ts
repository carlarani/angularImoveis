import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { HeaderComponent } from './header/header.component';
import { PricePipe } from './pipes/price.pipe';
import { CustomDirective } from './directive/directive';


@NgModule({
  declarations: [
    HeaderComponent,
    PricePipe,
    CustomDirective
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    PricePipe,
    CustomDirective
  ]
})
export class SharedModule { }
