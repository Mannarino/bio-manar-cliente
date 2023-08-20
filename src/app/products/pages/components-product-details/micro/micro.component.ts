import { Component,Input } from '@angular/core';
import { Product } from 'src/app/core/product';
import { environment } from 'src/environments/environment.development';
@Component({
  selector: 'app-micro',
  templateUrl: './micro.component.html',
  styleUrls: ['./micro.component.css']
})
export class MicroComponent {
  @Input() product: Product = {_id: '',
  title: '',
  image: '',
  price: 0,
  description: ''};
  url = environment.url_endpoint
}
