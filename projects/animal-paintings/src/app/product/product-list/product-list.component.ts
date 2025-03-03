import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../../models/product";
import {CartService} from "../../cart/cart.service";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";

class Products {
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  products : Product[] = [];

  constructor(private productService : ProductService,
              private cartService:CartService,
              private snackbar:MatSnackBar) {
  }

  ngOnInit(): void {
      this.productService.getProducts().subscribe(
        data => {
          this.products = data;
        }
      )
  }
  addtoCart(product : Product):void{
    this.cartService.addToCart(product).subscribe({
      next:()=>{
        this.snackbar.open("Added to cart","",{
          duration : 2000,
          horizontalPosition : "right",
          verticalPosition : "top"
        });
    }
    });
  }

}
