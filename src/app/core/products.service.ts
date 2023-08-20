import { Injectable } from '@angular/core';

import { HttpClient, HttpParams , HttpHeaders } from '@angular/common/http';
import { Product } from './product';
import { environment } from 'src/environments/environment.development';
import { MemoryService } from './memory.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient,
              private memoryService:MemoryService) { } 

  getAllProducts(){
    // Para tomar todos los registros del producto los tomamos en un array con GET
    return this.http.get<Product[]>(`${environment.url_endpoint}/products/`);
  }

  getProduct(id: string){
    
    // Para tomar solo un producto debemos pasarle el id a la URL con GET
    return this.http.get<Product>(`${environment.url_endpoint}/products/${id}`);
  }

  createProduct(product:any){
    const headers = new HttpHeaders().set('password', this.memoryService.getPassword() || '');
    // Para crear nuevos productos debemos pasarle la URL y el producto
    return this.http.post(`${environment.url_endpoint}/products/`, product, { headers });
  }

  updateProduct(id: string, changes:any){
    console.log(this.memoryService.getPassword())
    const headers = new HttpHeaders().set('password', this.memoryService.getPassword() || '');
    // Para actualizar un producto le pasamos la URL con el id y luego el o los cambios
    return this.http.put(`${environment.url_endpoint}/products/${id}`, changes, { headers });
  }

  deleteProduct(id: string){
    const headers = new HttpHeaders().set('password', this.memoryService.getPassword() || '');
    return this.http.delete(`${environment.url_endpoint}/products/${id}`, { headers });
  }
}
