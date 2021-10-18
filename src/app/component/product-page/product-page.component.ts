import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterLinkActive} from "@angular/router";
import {Coffee} from "../../model/coffee";
import {CoffeeService} from "../../service/coffee.service";
import {OrderService} from "../../service/order.service";
import {Order} from "../../model/order";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  count = 1;
  mass = 200;
  totalSum = 0;
  coffeeId: string | null = '';
  coffee: Coffee | null = null;
  dateDeliver = new Date();
  initPrice: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coffeeService: CoffeeService,
    private orderService: OrderService,
  ) { }

  ngOnInit(): void {
    this.coffeeId = this.route.snapshot.paramMap.get('id');

    this.getCoffee(this.coffeeId);
  }

  inc() {
    this.totalSum += this.initPrice;
    this.count++;
  }

  dec() {
    if (this.count > 1) {
      this.count--;
      this.totalSum -= this.initPrice;
    }
  }

  setMass(mass: number) {
    this.mass = mass;

    if (this.mass === 200) {
      this.initPrice = this.coffee?.price ? this.coffee.price : 0;
    } else if (this.mass === 400) {
      this.initPrice = this.coffee?.price ? this.coffee.price * 2 : 0;
    } else if (this.mass === 1000) {
      this.initPrice = this.coffee?.price ? this.coffee.price * 5 : 0;
    }
    this.totalSum = this.count * this.initPrice;
  }

  private getCoffee(id: string | null) {
    if (id != null) {
      this.coffeeService.getCoffeeById(id).subscribe(res => {
        this.coffee = res;
        this.totalSum = this.coffee ? this.coffee.price : 0;
        this.initPrice = res.price;
      });
    }
  }

  private isValidOrder(): boolean {
    return this.dateDeliver !== null && this.coffee !== null;
  }

  buy(): void {
    if (this.isValidOrder()) {

      this.orderService.create(new Order(null, this.coffee, this.totalSum, this.getRandomStatus(), this.dateDeliver, new Date()))
                       .subscribe(res => {
                         if (res) {
                           this.router.navigate(['/order'], {
                             queryParams: {
                               id: res.id
                             }
                           })
                         }
                       })
    }
  }

  private getRandomStatus(): string {
    const randomNumber = Math.random() * (5 - 1) + 1;
    let orderStatus;

    console.log(randomNumber);
    switch (Math.round(randomNumber)) {
      case 1:
        orderStatus = 'В обработке';
        break;
      case 2:
        orderStatus = 'На комплектации';
        break;
      case 3:
        orderStatus = 'Отправлен';
        break;
      case 4:
        orderStatus = 'Доставлен';
        break;
      default:
        orderStatus = 'Отменен';
        break;
    }

    return orderStatus;
  }
}
