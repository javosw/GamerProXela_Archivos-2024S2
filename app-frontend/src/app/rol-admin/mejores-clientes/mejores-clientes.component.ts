import { Component } from '@angular/core';
import { AdminService } from '../../gpx-services/admin.service';
import { Router } from '@angular/router';
import { MejoresClientes } from '../../gpx-data/admin.data';

@Component({
  selector: 'app-mejores-clientes',
  standalone: true,
  imports: [],
  templateUrl: './mejores-clientes.component.html',
})
export class MejoresClientesComponent {
  data_mejoresClientes = new Array<MejoresClientes>();

  flag_fueSolicitado: boolean  = false;
  flag_fueExitosa:boolean = false;

  constructor(private adminServ: AdminService, private router: Router) {
  }
  
  input_fecha1:string = '';
  input_fecha2:string = '';

  getMejoresClientes() {

    this.adminServ.getMejoresClientes().subscribe({
      next: (value: Array<MejoresClientes>) => {
        this.data_mejoresClientes = value;
        this.flag_fueSolicitado = true;
        this.flag_fueExitosa = true;
      },
      complete: () => {
        //this.flag_fueSolicitado = true;
      },
      error: (error) => {
        this.flag_fueSolicitado = true;
        this.flag_fueExitosa = false;
      }
    });
  }

  ngOnInit(){
    this.getMejoresClientes();
  }

  navegar(url: string) {
    this.router.navigate([url]);
  }


// +++++++++++++++++++++++++++++++++++++++++++++++++++++
ruta_AdminBoard = 'admin/board';


}
