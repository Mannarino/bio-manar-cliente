import { Component,Input } from '@angular/core';
import { Product } from 'src/app/core/product';
import { environment } from 'src/environments/environment.development';
@Component({
  selector: 'app-nitro',
  templateUrl: './nitro.component.html',
  styleUrls: ['./nitro.component.css']
})
export class NitroComponent {
  @Input() product: Product = {_id: '',
  title: '',
  image: '',
  price: 0,
  description: ''};
  url = environment.url_endpoint
}
