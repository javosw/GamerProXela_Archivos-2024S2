import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  ruta_CajaAddTarjeta,
  ruta_CajaModCliente,
  ruta_CajaAddCliete,
  ruta_CajaAddVenta,
  ruta_CajaAddDescuento
} from '../../gpx-rutas/caja.rutas';

@Component({
  selector: 'app-caja-board',
  standalone: true,
  imports: [],
  templateUrl: './caja-board.component.html',
})
export class CajaBoardComponent {
  
  rutas: any = {
    ruta_CajaAddTarjeta,
    ruta_CajaModCliente,
    ruta_CajaAddCliete,
    ruta_CajaAddVenta,
    ruta_CajaAddDescuento
  };

  constructor(private router: Router) {
  }

  navegar(url: string) {
    this.router.navigate([url]);
  }

}
