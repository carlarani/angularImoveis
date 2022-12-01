import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { MaterialModule } from '../material/material.module';
import { ListItemComponent } from './list/list-item/list-item.component';



@NgModule({
  declarations: [
    ListComponent,
    ListItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ListComponent,
    ListItemComponent
  ]
})
export class PagesModule { }
