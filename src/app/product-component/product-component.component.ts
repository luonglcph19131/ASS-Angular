import { Component, inject } from '@angular/core';
import { IProduct } from '../interface/product';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { response } from 'express';
import { log } from 'console';

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
  ngOnInit(): void{
    this.getProduct()
  }
  getProduct(){
    this.httpClient.get('https://dummyjson.com/products').subscribe((response:any) => {
      console.log(response.products);
      this.products = response.products;
    });
  }
}
