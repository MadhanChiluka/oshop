import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
 cart$;
  constructor(private shoppingcartService : ShoppingCartService) { }

  async ngOnInit() {
    this.cart$ = await this.shoppingcartService.getCart();
  }
  clearCart() {
    this.shoppingcartService.clearCart();
  }

}
