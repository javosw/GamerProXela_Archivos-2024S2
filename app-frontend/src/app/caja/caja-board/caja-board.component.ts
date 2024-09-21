import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ruta_AddTarjeta, ruta_ModCliente, ruta_AddCliete, ruta_AddVenta } from '../data/rutas'; 

@Component({
  selector: 'app-caja-board',
  standalone: true,
  imports: [],
  templateUrl: './caja-board.component.html',
})
export class CajaBoardComponent {
  ruta_AddTarjeta = ruta_AddTarjeta;
  ruta_ModCliente = ruta_ModCliente;
  ruta_AddCliete = ruta_AddCliete;
  ruta_AddVenta = ruta_AddVenta;

  constructor(private router:Router){
  }

  navegar(url: string) {
    this.router.navigate([url]);
  }

}
