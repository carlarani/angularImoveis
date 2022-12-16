import { Component, OnInit } from '@angular/core';

import { PropertyService } from 'src/app/services/property.service';

import Property from 'src/app/model/model.module';

/**
 * @List Basic expansion panel
 */

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  properties: Property[] = [];

  constructor(private propertyService: PropertyService)
  {

  }
  
  ngOnInit(): void {
    this.properties = this.propertyService.getProperties();
  }

  ngOnChanges():void {
    // console.log("Property List has changed!");
  }

}
