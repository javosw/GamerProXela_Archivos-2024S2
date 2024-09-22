import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  ruta_BodegaGetProductos,
  ruta_BodegaAddProducto
} from '../../gpx-rutas/bodega'

@Component({
  selector: 'app-bodega-board',
  standalone: true,
  imports: [],
  templateUrl: './bodega-board.component.html'
})
export class BodegaBoardComponent {
  rutas: any = {
    ruta_BodegaGetProductos,
    ruta_BodegaAddProducto
  };

  constructor(private router: Router) { }

  navegar(url: string) {
    this.router.navigate([url]);
  }

}
