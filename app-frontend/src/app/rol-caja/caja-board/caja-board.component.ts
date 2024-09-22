import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ruta_CajaAddTarjeta, ruta_CajaModCliente, ruta_CajaAddCliete, ruta_CajaAddVenta } from '../../gpx-rutas/caja'; 

@Component({
  selector: 'app-caja-board',
  standalone: true,
  imports: [],
  templateUrl: './caja-board.component.html',
})
export class CajaBoardComponent {
  ruta_AddTarjeta = ruta_CajaAddTarjeta;
  ruta_ModCliente = ruta_CajaModCliente;
  ruta_AddCliete = ruta_CajaAddCliete;
  ruta_AddVenta = ruta_CajaAddVenta;

  constructor(private router:Router){
  }

  navegar(url: string) {
    this.router.navigate([url]);
  }

}
