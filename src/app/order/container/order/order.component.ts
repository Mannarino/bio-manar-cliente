import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/core/cart.service';
import { Product } from 'src/app/core/product';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  products$: any
  order:any

  constructor(private cartService: CartService){
    this.cartService.cart$.subscribe(data =>{ 
      this.order=this.calcularOrden(data)
      console.log(this.order)
    })
  }

  calcularOrden(array:any){
      let nitroCantidad = 0
      let nitroPrecio = 0
      let microCantidad = 0
      let microPrecio = 0
      let ordenMicro =0 
      let ordenNitro = 0
      let ordenTotalPrecio = 0
      let ordenCantidadProductos = 0

      array.forEach((element:any) => {
        if(element.title==='Nitro'){
          nitroCantidad = nitroCantidad + 1
          nitroPrecio = element.price
        }
        if(element.title==='Micro'){
          microCantidad = microCantidad + 1
          microPrecio = element.price
        }
        
      });
      ordenMicro = microCantidad * microPrecio
      ordenNitro = nitroCantidad * nitroPrecio
      ordenTotalPrecio = ordenMicro + ordenNitro
      ordenCantidadProductos =nitroCantidad + microCantidad

      let orden = {cantidadProductosNitro:nitroCantidad,
                   cantidadProductosMicro:microCantidad,
                   precioOrdenNitro:ordenNitro,
                   precioOrdenMicro:ordenMicro,
                   precioOrdenTotal:ordenTotalPrecio,
                   cantidadTotalDeProductos: ordenCantidadProductos}
      return orden
  }
}