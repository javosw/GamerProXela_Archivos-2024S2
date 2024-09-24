import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InventarioService } from '../../gpx-services/inventario.service';
import { ruta_BodegaBoard } from '../../gpx-rutas/bodega.rutas';
import { Producto } from '../../gpx-data/invent.data';

@Component({
  selector: 'app-bodega-get-productos',
  standalone: true,
  imports: [],
  templateUrl: './bodega-get-productos.component.html'
})
export class BodegaGetProductosComponent {
  productos:Array<Producto> = new Array();
  fueFormEnviado: boolean = false;

  constructor(private inventServ: InventarioService, private router: Router) {
  }

  rutas: any = { ruta_BodegaBoard }


  ngOnInit() {
    this.getProductos();
  }

  getProductos() {
    this.inventServ.getProductos().subscribe({
      next: (value: Producto[]) => {
        this.productos = value;
        this.fueFormEnviado = true;
      },
      complete: () => {
        this.fueFormEnviado = true;
      },
      error: (error) => {
        this.fueFormEnviado = true;
      }
    });
  }

  navegar(url: string) {
    this.router.navigate([url]);
  }

}
