import { Component, Input } from '@angular/core';
import Imovel from 'src/app/model/model.module';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  @Input() imovel: Imovel = {
    title: "Nome do imóvel",
    majorQuality: "Descrever de forma chamativa a qualidade mais atrativa do imóvel",
    fullDescription: "Descrever de forma completa o imóvel, localização e oportunidade de investimento",
    seeing: false,
    favorite: false,
    lastUpdate: new Date(),
    imgPath: ""
  }

  makeFavorite(imovel: Imovel){
    imovel.favorite = !this.imovel.favorite;
    console.log(this.imovel.favorite)
  }
}
