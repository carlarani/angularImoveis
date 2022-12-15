import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';

import { PropertyService } from 'src/app/services/property.service';

import Property from 'src/app/model/model.module';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
    newProperty: Property = new Property("New property", "Describe major quality", 
    "Full description", 999999);

    propertyForm?: FormGroup;

    constructor(private propertyService:PropertyService){

    }

    ngOnInit(){
      this.propertyForm= new FormGroup({
          title: new FormControl(this.newProperty.title),
          majorQuality: new FormControl(this.newProperty.majorQuality),
          fullDescription: new FormControl(this.newProperty.fullDescription),
          price: new FormControl(this.newProperty.price),
          imgPath: new FormControl(this.newProperty.imgPath),
        })

        console.log(this.newProperty);
    }
    
    onSubmitForm(){

      this.propertyForm?.patchValue({

        id: this.propertyForm?.value,
        title: this.propertyForm?.controls['title'].value,
        majorQuality: this.propertyForm?.controls['majorQuality'].value,
        fullDescription: this.propertyForm?.controls['fullDescription'].value,
        price: this.propertyForm?.controls['price'].value,
        // imgPath: this.propertyForm?.controls['imgPath'].value,
      })
      
      this.newProperty = this.propertyForm?.value;

      if(this.newProperty.favorite==undefined || this.newProperty.seeing==undefined || this.newProperty.lastUpdate==undefined || this.newProperty.imgPath==undefined)
        this.getEmpty(this.newProperty);


        this.propertyService.postProperty(this.newProperty);
       console.log(this.newProperty);
    }

    getEmpty(prop: Property){
      if(this.newProperty.id==undefined)
        this.newProperty.id=Property.updateLastId();
      if(this.newProperty.favorite==undefined)
        this.newProperty.favorite=false;
      if(this.newProperty.seeing==undefined)
        this.newProperty.seeing=false;
      if(this.newProperty.lastUpdate==undefined)
        this.newProperty.lastUpdate=new Date();
      if(this.newProperty.imgPath==undefined)
        this.newProperty.imgPath="/assets/images/casaPadrao.png";
    }
}
