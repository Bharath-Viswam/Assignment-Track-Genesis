import { ProductServiceService } from './../product-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products:any= []
constructor(private productService:ProductServiceService){}
ngOnInit():void{
this.productService.getProducts().subscribe((data)=>{
  this.products = JSON.parse(JSON.stringify(data))
  console.log(this.products);
  
  
  
})
}
}
