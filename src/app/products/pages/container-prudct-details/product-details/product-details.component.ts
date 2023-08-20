import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/products.service';
import { ActivatedRoute, Params } from '@angular/router'; 
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  product:any;
  id:any
  url = environment.url_endpoint
  constructor(
              private route: ActivatedRoute,
              private productsService:ProductsService){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.getProduct(this.id);
    });
     
  }

  getProduct(id:any){
    this.productsService.getProduct(id)
    .subscribe((data:any) =>{
      this.product = data[0]
      console.log(data) 
    })
  }
}
