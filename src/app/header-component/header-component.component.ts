import { Component, inject } from '@angular/core';
import { IMenu } from '../interface/Menu';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.css'
})
export class HeaderComponentComponent {
  menus: IMenu[] = [{
    id: 1,
    name: "Quần áo nam",
    url: "trang-chu",
    parent: 0
  },
  {
    id: 2,
    name: "Quần áo nữ",
    url: "trang-chu",
    parent: 0
  },
  {
    id: 3,
    name: "Giày thể thao",
    url: "trang-chu",
    parent: 0
  },
  {
    id: 4,
    name: "Giày nam",
    url: "trang-chu",
    parent: 3
  },
  {
    id: 3,
    name: "Giày nữ",
    url: "trang-chu",
    parent: 3
  },
];
router = inject(Router)
logout(){
  // console.log('logged out');
  localStorage.removeItem('login');   
  this.router.navigate(['login']);
}

checkChildrent(menuId: number){
  let check = false;
  for (let menu of this.menus){
    if(menu.parent == menuId){
      check = true;
      break;
    }
  }
  return check;
}
}
