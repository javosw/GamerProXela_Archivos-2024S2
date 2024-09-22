import { Component } from '@angular/core';
import { AdminService } from '../../gpx-services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-get-empleados',
  standalone: true,
  imports: [],
  templateUrl: './admin-get-empleados.component.html'
})
export class AdminGetEmpleadosComponent {
  empleados;
  furFormEnviado: boolean;

  ruta_AdminBoard = 'admin/board';

  constructor(private adminServ: AdminService, private router: Router) {
    this.furFormEnviado = false;
    this.empleados = new Array<{ dpi: number, nombre: string, rol: string, sucursal: string, username: string }>();
  }

  ngOnInit() {
    this.getEmpleados();
  }

  getEmpleados() {
    this.adminServ.getEmpleados().subscribe({
      next: (response: { dpi: number, nombre: string, rol: string, sucursal: string, username: string }[]) => {
        this.empleados = response;
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
