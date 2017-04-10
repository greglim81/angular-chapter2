import { Component } from '@angular/core';

import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  template: 
    `<h1>{{title}}</h1>
    <products></products>`,
  providers: [ProductService]
})
export class AppComponent {
  title = 'My Second Angular App';  
}
