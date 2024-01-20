import { Component } from '@angular/core';
import { SlideComponentComponent } from '../slide-component/slide-component.component';
import { ProductComponentComponent } from '../product-component/product-component.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [SlideComponentComponent,ProductComponentComponent,RouterOutlet],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {

}
