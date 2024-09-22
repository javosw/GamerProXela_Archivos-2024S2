import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gpx-admin-board',
  standalone: true,
  imports: [],
  templateUrl: './admin-board.component.html',
})
export class AdminBoardComponent {
  ruta_getEmpleados = 'admin/empleados';
  ruta_addEmpleado = 'admin/empleados/add';
  ruta_modTarjeta = 'admin/board';
  ruta_getDescuentos = 'admin/board';
  ruta_getVentasGrandes = 'admin/board';
  ruta_getMejoresSucursales = 'admin/board';
  ruta_getProductosMasVendidos = 'admin/board';
  ruta_getClientesDistinguidos = '';

  constructor(private router:Router){
  }

  navegar(url:string){
    this.router.navigate([url]);
  }
}
