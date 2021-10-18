import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Order} from "../model/order";
import {Observable} from "rxjs";

@Injectable()
export class OrderService {
  api = '/orders';

  constructor(private http: HttpClient) { }

  create(order: Order): Observable<Order> {
    return this.http.post<Order>(this.api, order);
  }

  getById(id: string): Observable<Order>{
    return this.http.get<Order>(this.api + `/${id}`)
  }
}
