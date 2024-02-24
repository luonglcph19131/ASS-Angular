import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
    constructor(private http: HttpClient){

    }
    mess = ''
    category: any;

    productForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      cate_id: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      detail: new FormControl('', [Validators.required])
    })

    onSubmit(){
      // localStorage.clear
      let data = {
        name: this.productForm.get('name')?.value,
        price: this.productForm.get('price')?.value,
        cate_id: this.productForm.get('cate_id')?.value,
        image: this.productForm.get('image')?.value,
        detail: this.productForm.get('detail')?.value,
      }
      this.http.post('http://localhost:3000/product',data).subscribe((data:any) => {
        if(data.id !== ''){
          this.mess = 'Dang thanh cong';
          this.productForm.setValue({
            name: '',
            price: '',
            cate_id: '',
            image: '',
            detail: ''
          })
        }else{
          this.mess = 'Dang khong thanh cong'
        }
      })

    }

    ngOnInit(){
      this.getCategory();
    }
    getCategory(){
      this.http.get('http://localhost:3000/categories').subscribe((data: any)=> {
        this.category = data
      })
    }
}
