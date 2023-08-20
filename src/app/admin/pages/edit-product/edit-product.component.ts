import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/core/products.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment.development';

declare let alertify:any

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{
  form: FormGroup;
  file:any
  id:any
  previewImage: string | undefined;
  url_endpoint = environment.url_endpoint
  formData:any
  cambioImagen = false
  disableInput: boolean = true;
  
  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private productsService:ProductsService) {
    this.form=this.buildForm()
  }
  ngOnInit(): void{
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.getProduct(this.id); 
  }
  
  onSubmit() {
    if(this.cambioImagen){
      this.formData = new FormData();
      this.formData.append('title', this.form.get('title')?.value);
      this.formData.append('description', this.form.get('description')?.value);
      this.formData.append('price', this.form.get('price')?.value);
      this.formData.append('image', this.file);
      this.formData.append('cambioImagen',true)
    }else{
      this.formData = new FormData();
      this.formData.append('title', this.form.get('title')?.value);
      this.formData.append('description', this.form.get('description')?.value);
      this.formData.append('price', this.form.get('price')?.value);
      this.formData.append('cambioImagen',false)
    } 
  
    this.productsService.updateProduct(this.id, this.formData)
    .subscribe(data => {
      console.log(data);
      alertify.success('Success notification message.');
    });
  }
  
  buildForm(){
    return  this.fb.group({
      title: [{ value: '', disabled: true }],
      description: [''],
      price: [''],
    });
  }

  onImageChange(event: any) {
    const element = event.target as HTMLInputElement
    const file = element.files?.item(0)
    if(file){
      this.file= file
      this.cambioImagen = true
    }
    
    if (file) {
       // La imagen tiene un tamaño menor o igual a 4 MB
      if (file.size <= 4 * 1024 * 1024) {
       
        // Crea un objeto URL para representar la imagen seleccionada
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.previewImage = e.target.result;
        };
        reader.readAsDataURL(file);
        
      } else {
        
        this.previewImage = undefined; // Limpiar vista previa de la imagen si se excede el límite de tamaño
      }  
    }
  }

  getProduct(id:any){
    this.productsService.getProduct(id)
    .subscribe((data:any) =>{
      const product = data[0];

          if (this.form) {
            this.form.get('title')?.setValue(product.title);
            this.form.get('description')?.setValue(product.description);
            this.form.get('price')?.setValue(product.price);
            this.previewImage = `${this.url_endpoint}/${product.image}`;
          }
      
    })
  }
}
