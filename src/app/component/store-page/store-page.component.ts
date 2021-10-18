import { Component, OnInit } from '@angular/core';
import {Coffee} from "../../model/coffee";
import {CoffeeService} from "../../service/coffee.service";

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.scss']
})
export class StorePageComponent implements OnInit {
  coffees: Coffee[] = [];

  constructor(private coffeeService: CoffeeService) {

  }

  ngOnInit(): void {
    this.getCoffees();
  }

  private getCoffees(): void {
    this.coffeeService.getAll().subscribe(res => {
      this.coffees = res;
    })
  }

}
