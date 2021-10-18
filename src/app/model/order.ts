import {Coffee} from "./coffee";

export class Order {
  public id: number | null;
  public coffee: Coffee | null;
  public totalSum: number;
  public status: string;
  public deliverDate: Date;
  public createDate: Date;

  constructor(id: number | null, coffee: Coffee | null, totalSum: number, status: string, deliverDate: Date, createDate: Date) {
    this.id = id;
    this.coffee = coffee;
    this.totalSum = totalSum;
    this.status = status;
    this.deliverDate = deliverDate;
    this.createDate = createDate;
  }
}
