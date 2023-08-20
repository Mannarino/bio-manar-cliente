import { Component,Input } from '@angular/core';
import { CartService } from 'src/app/core/cart.service';
import { Product } from 'src/app/core/product';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product = {_id: '',
  title: '',
  image: '',
  price: 0,
  description: ''};
  url = environment.url_endpoint
  notArrivedImage = true

  constructor(private cartService: CartService) { }

  imageLoaded() {
    this.notArrivedImage = false;
  }
  addCart(): any{
    this.cartService.addCart(this.product);
    //console.log(this.product);
  }
}
