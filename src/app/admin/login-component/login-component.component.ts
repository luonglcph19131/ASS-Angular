import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email])
  })
  mess = ''
  router = inject(Router)
  onSubmit(){
    let u = this.loginForm.controls.username.value;
    let p = this.loginForm.controls.password.value;
    let e = this.loginForm.controls.email.value;
    if( (u== 'admin') && (p == '123456') && (e == 'luonglcph19131@fpt.edu.vn')){
      this.mess = "Dang nhap thanh cong"
      localStorage.setItem('login','ok');
      this.router.navigate(['dashboard'])
    }
    else{
      this.mess = "Dang nhap that bai"
    }
  }
}
