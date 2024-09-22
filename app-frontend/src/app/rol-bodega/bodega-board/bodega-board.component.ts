import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bodega-board',
  standalone: true,
  imports: [],
  templateUrl: './bodega-board.component.html'
})
export class BodegaBoardComponent {
  ruta_addProducto = 'bodega/productos/add';
  ruta_getProductos = 'bodega/productos';

  constructor(private router:Router){}

  navegar(url:string){
    this.router.navigate([url]);
  }

}
