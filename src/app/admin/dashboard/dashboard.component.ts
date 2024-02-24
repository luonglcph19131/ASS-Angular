import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private http:HttpClient){}
  products: any
  ngOnInit(){
    this.getAllProduct()
  }
  getAllProduct(){
    this.http.get('http://localhost:3000/product').subscribe((response)=>{
      this.products = response;
    })
  }

  handleDelProduct(pid:any){
    if (confirm('Bạn muốn xóa sản phẩm này?')){
    this.http.delete('http://localhost:3000/product/'+pid).subscribe((response)=>{
      this.products = response;
      this.getAllProduct();
     }); 
    }       
  }

}
