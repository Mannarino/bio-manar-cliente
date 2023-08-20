import { Component ,OnInit } from '@angular/core';
import { Product } from 'src/app/core/product';
import { ProductsService } from 'src/app/core/products.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent  implements OnInit{
  products:any;
  displayedColumns: string[] = ['title','description' , 'price', 'actions'];
  constructor(private productsService:ProductsService){}

  ngOnInit(): void{
    this.fetchProducts();
  }

  fetchProducts(){
    this.productsService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(id: string){
    this.productsService.deleteProduct(id).subscribe(
      (res) => {
        console.log('Borrado exitoso');
        if (res) {
          const index = this.products.findIndex((product: Product) => product._id === id);
          if (index !== -1) {
            this.products.splice(index, 1);
            this.products = [...this.products];
          }
        }
      }
    );
  }
}
