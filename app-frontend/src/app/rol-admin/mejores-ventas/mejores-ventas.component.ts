import { Component } from '@angular/core';
import { AdminService } from '../../gpx-services/admin.service';
import { MejoresVentas } from '../../gpx-data/admin.data';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mejores-ventas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mejores-ventas.component.html',
})
export class MejoresVentasComponent {
  data_mejoresVentas = new Array<MejoresVentas>();

  flag_fueSolicitado: boolean  = false;
  flag_fueExitosa:boolean = false;

  constructor(private adminServ: AdminService, private router: Router) {
  }
  
  input_fecha1:string = '';
  input_fecha2:string = '';

  getMejoresVentas() {

    this.adminServ.getMejoresVentas(this.input_fecha1,this.input_fecha2).subscribe({
      next: (value: Array<MejoresVentas>) => {
        this.data_mejoresVentas = value;
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

  navegar(url: string) {
    this.router.navigate([url]);
  }


// +++++++++++++++++++++++++++++++++++++++++++++++++++++
ruta_AdminBoard = 'admin/board';

}
