import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BodegaService } from '../../services/bodega.service';

@Component({
  selector: 'app-bodega-get-productos',
  standalone: true,
  imports: [],
  templateUrl: './bodega-get-productos.component.html'
})
export class BodegaGetProductosComponent {
  productos;
  furFormEnviado: boolean;

  constructor(private bodegaServ: BodegaService, private router: Router) {
    this.furFormEnviado = false;
    this.productos = new Array<{ barcode: number, nombre: string, unidades: number }>();
  }

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
