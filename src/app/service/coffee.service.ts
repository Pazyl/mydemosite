import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Coffee} from "../model/coffee";

@Injectable()
export class CoffeeService {
  api = '/coffee'

  constructor(private http: HttpClient) { }

  getCoffeeById(id: string): Observable<Coffee> {
    return this.http.get<Coffee>(this.api + `/${id}`);
  }

  getAll(): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(this.api);
  }
}
