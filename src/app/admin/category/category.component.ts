import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  constructor(private http: HttpClient){

  }
  categoryForm = new FormGroup({
    category: new FormControl('',[Validators.required]),

  })
  mess =''
  onSubmit(){
    
    let data = {
      category: this.categoryForm.get('category')?.value,
    }
    console.log(data);
    this.http.post('http://localhost:3000/categories',data).subscribe((data:any) => {
      if(data.id !== ''){
        this.mess = 'Dang thanh cong'
        this.categoryForm.setValue({
          category: '',
        })
      }else{
        this.mess = 'Dang khong thanh cong'
      }
    })

  }
}
