import {Component, OnInit} from '@angular/core';
import {CartService} from "../cart.service";
import {Product} from "../../models/product";

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit{

  cartItems : Product[] =[];
  totalPrice : number =0;

  constructor(private cardService : CartService) {
  }

  ngOnInit(): void {
    this.cardService.getCartItems().subscribe(data=>{
      this.cartItems = data;
      this.totalPrice = this.getTotalPrice();
    })
  }
  getTotalPrice():number{
    let totalPrice = 0;
    for(let item of this.cartItems){
      totalPrice += item.price;
    }
    return totalPrice;
  }

  clearCart():void{
    this.cardService.deleteCart().subscribe();
    this.cartItems = [];
    this.totalPrice = 0;
  }


}
