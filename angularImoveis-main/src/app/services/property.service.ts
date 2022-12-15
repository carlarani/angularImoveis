import { Injectable } from '@angular/core';
import Property from '../model/model.module';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  properties: Property[] = [
    {
      id: 1,
      title: "Casa na praia",
      majorQuality: "A 300m da orla da praia",
      fullDescription: "Casa com 3 dormitórios, sendo 1 suíte. Cozinha americana integrada na sala. Lavabo e banheiro completo. Com varanda com vista para o mar.",
      price: 310000,
      seeing: false,
      favorite: false,
      lastUpdate: new Date(),
      imgPath:"/assets/images/casaDePraia.webp"
    },
    {
      id: 2,
      title: "Sítio no campo",
      majorQuality: "Mais de 1000m² de mata preservada",
      fullDescription: "Casa com 2 dormitórios térrea. Sala e cozinha intregrados com área gourmet e piscina.",
      price: 4000000,
      seeing:false,
      favorite: false,
      lastUpdate: new Date(),
      imgPath:"/assets/images/sitio.webp"
    },
    {
      id: 3,
      title: "Casa em condomínio",
      majorQuality: "O conforto de uma casa, na segurança de um condomínio",
      fullDescription: "Casa com 4 dormitórios, sendo 3 suíte. Cozinha, sala de jantar e sala de estar totalmente isoladas. Em bairro nobre de São Paulo.",
      price: 760000,
      seeing:false,
      favorite: false,
      lastUpdate: new Date(),
      imgPath:"/assets/images/casaCond.jpg"

    },
    {
      id: 4, 
      title: "Studio no centro",
      majorQuality: "A apenas 2 quarteirões da Rua Augusta e toda sua comodidade",
      fullDescription: "Studio com 30m². Todos os espaços integrados. Totalmente mobiliado.",
      price: 90000,
      seeing:false,
      favorite:false,
      lastUpdate: new Date(),
      imgPath:"/assets/images/studio.jpg"
    }
  ]

  constructor() { }

  getProperties() : Property[] {
    const json = localStorage.getItem("list");
    if(json)
      this.properties = JSON.parse(json);
    this.checkEmptyList(false);
    return this.properties;
  }

  getProperty(id:number)
  {
    const json = localStorage.getItem("list");
    if(json)
      this.properties = JSON.parse(json);
      const index = this.properties.findIndex((property)=> property.id == id);
    return this.properties[index];
  }

  postProperty(newProperty : Property) : void {
    // console.log(`Antes : ${this.properties.length}`);
    this.properties.push(newProperty);
    alert("Imóvel adicionado com sucesso!");
    // console.log(`Depois : ${this.properties.length}`);
    this.saveChanges();
  }

  updateProperty(id: number, updatedProperty: Property) {
    console.log(id);
    const index = this.properties.findIndex((property)=> property.id == id);
    
    this.properties[index] = updatedProperty;
    this.saveChanges();
  }

  deleteProperty(id:number) {
    const index = this.properties.findIndex((property)=> property.id == id);
    this.properties.splice(index, 1);
    alert("Imóvel deletado!");
    let refreshed=false;
    this.checkEmptyList(refreshed);
    this.saveChanges();
    
  }

  saveChanges()
  {
    console.log(this.properties);
    if(localStorage.getItem("list")==null)
      localStorage.setItem("list", JSON.stringify(this.properties));
    else{
      localStorage.removeItem("list");
      localStorage.setItem("list", JSON.stringify(this.properties));
    }
  }

  checkEmptyList(refreshed : boolean){
    if(this.properties.length==0)
    {
      let pageTitle = document.getElementById("page-title");
      if(pageTitle)
      {
        pageTitle.innerHTML="Sem imóveis no momento";
      }
      this.refresh(refreshed);
    }
  }

  refresh(refreshed: boolean)
  {
    if(refreshed) 
      {
        location.replace("/list");
        refreshed = !refreshed;
      }
  }

}
