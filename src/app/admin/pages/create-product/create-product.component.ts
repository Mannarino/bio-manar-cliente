import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/core/products.service';

declare let alertify:any

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  form: FormGroup;
  file:any
  previewImage: string | undefined;
  constructor(private fb: FormBuilder,
              private productsService:ProductsService) {
    this.form=this.buildForm()
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('title', this.form.get('title')?.value);
    formData.append('description', this.form.get('description')?.value);
    formData.append('price', this.form.get('price')?.value);
    formData.append('image', this.file);
     
    

    this.productsService.createProduct(formData)
      .subscribe(data =>{
        console.log(data)
        this.form.reset()
        alertify.success('Success notification message.'); 
      },error=>{
        console.log(error)
        console.log(error.error.msg)
        alertify.error('se produjo un error en el servidor , intente mas tarde')
      })
  }
  
  buildForm(){
    return  this.fb.group({
      title: [''],
      description: [''],
      price: [''],
    });
  }

  onImageChange(event: any) {
    const element = event.target as HTMLInputElement
    const file = element.files?.item(0)
    if(file){
      this.file= file
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
}