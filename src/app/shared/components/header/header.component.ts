import { Component } from '@angular/core';
import { CartService } from 'src/app/core/cart.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  total$: Observable<number>;

  constructor(private cartService: CartService){
    this.total$ = cartService.cart$.pipe(
      map((products:any) => products.length)
    );
  }
}
