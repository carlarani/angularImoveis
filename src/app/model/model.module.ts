export default class Property {
  static lastId=4;

  id: number;
  title: string;
  majorQuality: string;
  fullDescription: string;
  price: number;
  seeing: boolean;
  favorite: boolean;
  lastUpdate: Date;
  imgPath?: string;

  constructor(title: string, quality:string, description:string, price:number, seeing: boolean=false, favorite: boolean=false, lastUpdate: Date = new Date(), imgPath?: string)
  {
    this.title=title;
    this.majorQuality=quality;
    this.fullDescription=description;
    this.price=price;
    this.seeing=seeing;
    this.favorite=favorite;
    this.lastUpdate=lastUpdate;
    this.imgPath=imgPath;
    
    this.id = Property.updateLastId();
  }

  static updateLastId(id?:number): number {
    return ++this.lastId;
  }
}
