import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import Property from 'src/app/model/model.module';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.css'],
  providers:[{
    provide: MatDialogRef,
    useValue: {},
  }
  ]
})
export class PropertyFormComponent {
  @Input() newProperty: Property = new Property("New property", "Describe major quality", 
  "Full description", 999999);
  @Input() requestType: string = "post";

  propertyForm?: FormGroup;

  constructor(private propertyService: PropertyService, public dialogRef: MatDialogRef<any>) {}

  ngOnInit() {
      this.propertyForm= new FormGroup({
        title: new FormControl(this.newProperty.title),
        majorQuality: new FormControl(this.newProperty.majorQuality),
        fullDescription: new FormControl(this.newProperty.fullDescription),
        price: new FormControl(this.newProperty.price),
        imgPath: new FormControl(this.newProperty.imgPath),
      })
    }
  

  onSubmitForm() {
    this.propertyForm?.patchValue({
      title: this.propertyForm?.controls['title'].value,
      majorQuality: this.propertyForm?.controls['majorQuality'].value,
      fullDescription: this.propertyForm?.controls['fullDescription'].value,
      price: this.propertyForm?.controls['price'].value,
      // imgPath: this.propertyForm?.controls['imgPath'].value,
    })    
    
    
    
    if (this.requestType == "post") {
      this.newProperty = this.propertyForm?.value;
      if(this.newProperty.favorite==undefined || this.newProperty.seeing==undefined || this.newProperty.lastUpdate==undefined || this.newProperty.imgPath==undefined)
        this.getEmpty(this.newProperty);
        this.propertyService.postProperty(this.newProperty);
      } else {
        this.newProperty = {id: this.newProperty.id, ...this.propertyForm?.value};
        this.newProperty.lastUpdate= new Date();
        this.propertyService.updateProperty(this.newProperty.id, this.newProperty);
      }
      
      this.propertyService.saveChanges();
      console.log(this.newProperty);
      console.log(this.newProperty.lastUpdate);
      
      // this.dialogRef.close();
      this.propertyService.refresh(false);
  }

  getEmpty(prop: Property){
    
    if(this.newProperty.id==undefined)
      this.newProperty.id=Property.updateLastId();
    
    this.newProperty.favorite=false;
    this.newProperty.seeing=false;
    this.newProperty.lastUpdate=new Date();
    this.newProperty.imgPath="/assets/images/casaPadrao.png";
  }

}
