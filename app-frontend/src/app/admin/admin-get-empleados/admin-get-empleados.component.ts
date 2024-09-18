import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-get-empleados',
  standalone: true,
  imports: [],
  templateUrl: './admin-get-empleados.component.html'
})
export class AdminGetEmpleadosComponent {
  constructor(private adminServ: AdminService, private router: Router) {
    this.fueronEmpleadosRecibidos = false;
    this.empleados = new Array<{ dpi: number, nombre: string, rol: string, sucursal: string, username: string }>();
  }

  empleados;
  fueronEmpleadosRecibidos: boolean;

  ngOnInit() {
    this.getEmpleados();
  }

  getEmpleados() {
    this.adminServ.getEmpleados().subscribe({
      next: (response: { dpi: number, nombre: string, rol: string, sucursal: string, username: string }[]) => {
        this.empleados = response;
        this.fueronEmpleadosRecibidos = true;
      },
      complete: () => {
        this.fueronEmpleadosRecibidos = true;
      },
      error: (error) => {
        this.fueronEmpleadosRecibidos = true;
      }
    });
  }

  navegar(url: string) {
    this.router.navigate([url]);
  }

}
