export class Coffee {
  public id: number;
  public name: string;
  public price: number;
  public imgUrl: string;

  constructor(id: number, name: string, price: number, imgUrl: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.imgUrl = imgUrl;
  }
}
