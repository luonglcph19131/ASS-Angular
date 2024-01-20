import { Component } from '@angular/core';
import { IMenu } from '../interface/Menu';
import { CommonModule } from '@angular/common';

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
    name: "Trang chu",
    url: "trang-chu",
    parent: 0
  },
  {
    id: 2,
    name: "Gioi thieu",
    url: "trang-chu",
    parent: 0
  },
  {
    id: 3,
    name: "Tin tuc",
    url: "trang-chu",
    parent: 0
  },
  {
    id: 4,
    name: "Tin noi bo",
    url: "trang-chu",
    parent: 3
  },
  {
    id: 3,
    name: "Tin xa hoi",
    url: "trang-chu",
    parent: 3
  },
];

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
