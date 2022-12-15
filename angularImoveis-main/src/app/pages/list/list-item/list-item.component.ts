import { Component, Input, OnChanges, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import Property from 'src/app/model/model.module';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnChanges{
  @Input() property?: Property ;
  @ViewChild('dialogTemplate') dialogTemplate?: TemplateRef<any>;


  constructor(private propertyService : PropertyService, private dialog: MatDialog)
  {

  }

  ngOnInit() {
    // console.log(`Task List Item com id = ${this.property?.id}!`);
  }

  makeFavorite(): void {
    if (this.property) this.property.favorite = !this.property.favorite;
  }

  makeSeeing(property: Property){
    if(!property.seeing)
      property.seeing=true;
  }

  deleteItem()
  {
    if(this.property)
      this.propertyService.deleteProperty(this.property.id);
  }

  openDialog() {
    if(this.dialogTemplate){
      this.dialog.open(this.dialogTemplate, {
        data: { title: "Atualizar Imóvel" }
      });
    }
  }

  print(prop : Property)
  {
    console.log(prop);
  }

  ngOnChanges(): void {
    // console.log('Task List Item has changed!');
  }
}
