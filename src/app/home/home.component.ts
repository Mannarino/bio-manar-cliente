import { Component , OnInit} from '@angular/core';
import Swiper from 'swiper';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements

register();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
    
    ngOnInit(): void{
      
    }
   
}
