export default interface Imovel {
  title: string;
  majorQuality: string;
  fullDescription: string;
  price?: number;
  seeing: boolean;
  favorite: boolean;
  lastUpdate: Date;
  imgPath?: string;
}
