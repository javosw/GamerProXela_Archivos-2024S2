import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  ruta_AdminGetEmpleados,
  ruta_AdminAddEmpleado,
  ruta_AdminModTarjeta,
  ruta_AdminGetDescuentos,
  ruta_AdminGetMejoresVentas,
  ruta_AdminGetMejoresSucursales,
  ruta_AdminGetMejoresProductos,
  ruta_AdminGetMejoresClientes
} from '../../gpx-rutas/admin.rutas';

@Component({
  selector: 'gpx-admin-board',
  standalone: true,
  imports: [],
  templateUrl: './admin-board.component.html',
})
export class AdminBoardComponent {
  rutas:any = {
    ruta_AdminGetEmpleados,
    ruta_AdminAddEmpleado,
    ruta_AdminModTarjeta,
    ruta_AdminGetDescuentos,
    ruta_AdminGetMejoresVentas,
    ruta_AdminGetMejoresSucursales,
    ruta_AdminGetMejoresProductos,
    ruta_AdminGetMejoresClientes
  };

  constructor(private router: Router) {
  }

  navegar(url: string) {
    this.router.navigate([url]);
  }
}
