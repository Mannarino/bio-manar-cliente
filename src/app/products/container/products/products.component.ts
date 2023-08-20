import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
     products:any;
     constructor(private productsService:ProductsService){}
     
     ngOnInit(): void{
        this.fetchProducts();
      }

    fetchProducts(){
      this.productsService.getAllProducts().subscribe(products => {
        this.products = products;
      });
    }
}

  

  