import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '../../../../node_modules/angularfire2/database';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

@Injectable()
export class OrderService {

  constructor(
    private shoppingCartService : ShoppingCartService,
    private db : AngularFireDatabase) { }

  async placeOrder(order){
     let result = await this.db.list('/orders').push(order);
     this.shoppingCartService.clearCart();
     return result;
  }

  getOrders() {
    return this.db.list('/orders');
  }

  getOrdersByUser(userId : string) {
   return this.db.list('/orders', {
      query : {
        orderByChild : 'userId',
        equalTo : userId
      }
    });
  }

}
