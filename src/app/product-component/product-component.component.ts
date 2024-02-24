import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { response } from 'express';
import { deflateRaw } from 'zlib';
import { log } from 'console';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-component',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './product-component.component.html',
  styleUrl: './product-component.component.css'
})
export class ProductComponentComponent {
  products: any;
   httpClient = inject(HttpClient);
    ngOnInit() {
      this.getProudctData();
    }
   getProudctData(){
    this.httpClient.get('http://localhost:3000/product')
    .subscribe((response:any)=>{
        // console.log(response);
        this.products = response;
    })
   }
   addToCart(pid:any,name:any,image:any,price:any){
    const product = {
      pid: pid,
      name:name,
      image:image,
      price:price,
      quantity:1
    }
      const cart = localStorage.getItem('cart');
      if (cart ==null){
        console.log(`chuwa tồn tại`);        
        localStorage.setItem('cart',JSON.stringify([product]));
      }
      else{
        console.log(`đã tồn tại`);
         const products = JSON.parse(cart);
         console.log(products);    
        let ktra = false;   
        let vitri = -1;
        for (let i = 0; i < products.length; i++){
           if (products[i].pid == pid){
            ktra=true;
            vitri = i;
           }
        }
        if (ktra){
          products[vitri].quantity = products[vitri].quantity+1;
        }
        else {
          products.push(product);
        }
        localStorage.setItem('cart',JSON.stringify(products));
      }    
   }
}
