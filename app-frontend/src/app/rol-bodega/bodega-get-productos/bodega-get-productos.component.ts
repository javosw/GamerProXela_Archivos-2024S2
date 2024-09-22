import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InventarioService } from '../../gpx-services/inventario.service';
import { ruta_BodegaBoard } from '../../gpx-rutas/bodega';

@Component({
  selector: 'app-bodega-get-productos',
  standalone: true,
  imports: [],
  templateUrl: './bodega-get-productos.component.html'
})
export class BodegaGetProductosComponent {
  productos;
  furFormEnviado: boolean;

  constructor(private bodegaServ: InventarioService, private router: Router) {
    this.furFormEnviado = false;
    this.productos = new Array<{ barcode: number, nombre: string, unidades: number }>();
  }
  rutas:any = {ruta_BodegaBoard}


  ngOnInit() {
    this.getEmpleados();
  }

  getEmpleados() {
    this.bodegaServ.getProductos().subscribe({
      next: (response: { barcode: number, nombre: string, unidades: number }[]) => {
        this.productos = response;
        this.furFormEnviado = true;
      },
      complete: () => {
        this.furFormEnviado = true;
      },
      error: (error) => {
        this.furFormEnviado = true;
      }
    });
  }

  navegar(url: string) {
    this.router.navigate([url]);
  }

}
