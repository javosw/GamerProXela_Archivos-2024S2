import { Component } from '@angular/core';
import { AdminService } from '../../gpx-services/admin.service';
import { Router } from '@angular/router';
import { Empleado } from '../../gpx-data/admin';

@Component({
  selector: 'app-admin-get-empleados',
  standalone: true,
  imports: [],
  templateUrl: './admin-get-empleados.component.html'
})
export class AdminGetEmpleadosComponent {
  data_empleados = new Array<Empleado>();

  flag_fueFormEnviado: boolean  = false;

  ruta_AdminBoard = 'admin/board';

  constructor(private adminServ: AdminService, private router: Router) {
  }

  ngOnInit() {
    this.getEmpleados();
  }

  getEmpleados() {
    this.adminServ.getEmpleados().subscribe({
      next: (value: Array<Empleado>) => {
        this.data_empleados = value;
        this.flag_fueFormEnviado = true;
      },
      complete: () => {
        this.flag_fueFormEnviado = true;
      },
      error: (error) => {
        this.flag_fueFormEnviado = true;
      }
    });
  }

  navegar(url: string) {
    this.router.navigate([url]);
  }

}
