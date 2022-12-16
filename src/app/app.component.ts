import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { SharedModule } from "./shared/shared.module";
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import Property from './model/model.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Realty list'; 
  @Input() property?: Property ;
  @ViewChild('dialogTemplate') dialogTemplate?: TemplateRef<any>;

constructor(private dialog: MatDialog){
  
}

  openDialog() {
    if(this.dialogTemplate){
      this.dialog.open(this.dialogTemplate, {
        data: { title: "Atualizar Imóvel" }
      });
    }
  }
}
