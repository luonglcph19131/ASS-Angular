
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {
  constructor(private http: HttpClient, private route:ActivatedRoute){
    
  }
  mess = ''
  category: any
  productForm = new FormGroup({
    name: new FormControl('', Validators.required),
    cate_id: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    detail: new FormControl('', Validators.required),
  })
  id = this.route.snapshot.params['id'];
  product: any ={id: "", name: "", cate_id: "", price: "", image: "", detail: ""} 

  onSubmit(){
    let data = {
      name: this.productForm.controls.name.value,
      cate_id: this.productForm.controls.cate_id.value,
      price: this.productForm.controls.price.value,
      image: this.productForm.controls.image.value,
      detail: this.productForm.controls.detail.value,
    }
    this.http.put(`http://localhost:3000/product/${this.id}`, data).subscribe((response:any) => {
      if(response.id !== ''){
        this.mess = 'Cap nhat thanh cong'
      }else{
        this.mess = 'Cap nhat that bai'
      }
    })
  }

  ngOnInit(){
    this.getCategory()
    this.getProductID(this.id)

  }
  getCategory(){
    this.http.get('http://localhost:3000/categories').subscribe((response:any) =>{
      this.category = response
    })
  }
  getProductID(id:string ){
    this.http.get('http://localhost:3000/product/'+id).subscribe((response:any)=> {
      console.log(response);
      // response;
      if(typeof response =='object'){
        this.productForm.setValue({
          name: response.name,
          cate_id: response.cate_id,
          price: response.price,
          image: response.image,
          detail: response.detail
        })
      }
    })
  }
}
