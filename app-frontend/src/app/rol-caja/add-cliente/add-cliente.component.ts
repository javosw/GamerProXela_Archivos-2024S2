import { Component } from '@angular/core';
import { ruta_CajaBoard } from '../../gpx-rutas/caja.rutas';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CajaService } from '../../gpx-services/caja.service';
import { Router } from '@angular/router';
import { AddCliente } from '../../gpx-data/caja.data';

@Component({
  selector: 'app-add-cliente',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-cliente.component.html',
})
export class CajaAddClienteComponent {
  form_cliente: FormGroup;

  flag_fueExitoso: boolean;
  flag_fueSolicitado: boolean;

  rutas:any = {ruta_CajaBoard}

  constructor(private formBuilder: FormBuilder, private cajaServ:CajaService, private router:Router) {
    this.flag_fueExitoso = false;
    this.flag_fueSolicitado = false;
    this.form_cliente = this.formBuilder.group({
      nit: [''],
      nombre: [''],
    });
  }

  onSubmit() {
    this.flag_fueSolicitado = false;

    this.cajaServ.addCliente(this.form_cliente.value as AddCliente).subscribe({
      next: (value: any) => {
        this.flag_fueSolicitado = true;
        this.flag_fueExitoso = true;
      },
      complete: ()=>{
        this.flag_fueSolicitado = true;
      },
      error: (error) => {
        this.flag_fueSolicitado = true;
        this.flag_fueExitoso = false;
      }
    });
  }

  navegar(url:string){
    this.router.navigate([url]);
  }

}
