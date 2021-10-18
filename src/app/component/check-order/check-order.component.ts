import { Component, OnInit } from '@angular/core';
import {Order} from "../../model/order";
import {ActivatedRoute, Router} from "@angular/router";
import {OrderService} from "../../service/order.service";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-check-order',
  templateUrl: './check-order.component.html',
  styleUrls: ['./check-order.component.scss']
})
export class CheckOrderComponent implements OnInit {
  orderId: string | null = null;
  order: Order | null = null;
  hasError: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private orderService: OrderService,
  ) { }

  ngOnInit(): void {
    this.orderId = this.route.snapshot.queryParamMap.get("id");
    this.getOrder();
  }

  getOrder(): void {
    if (this.orderId) {
      this.orderService.getById(this.orderId).subscribe(
        res => {
          this.order = res;
          this.hasError = false;
          this.router.navigate(['/order'], {
            queryParams: {
              id: res.id
            }
          })
        },
        error => {
          this.order = null;
          this.hasError = true;
        }
      );
    }
  }

  clearOrderId() {
    this.orderId=''
    this.order = null;
    this.hasError = false;
  }
}
