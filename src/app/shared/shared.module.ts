import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';

import { PricePipe } from './pipes/price.pipe';
import { CustomDirective } from './directive/directive';

import { HeaderComponent } from './header/header.component';
import { DialogComponent } from './dialog/dialog.component';
import { PropertyFormComponent } from './property-form/property-form.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PricePipe,
    CustomDirective,
    DialogComponent,
    PropertyFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    PricePipe,
    CustomDirective,
    DialogComponent,
    PropertyFormComponent
  ]
})
export class SharedModule { }
