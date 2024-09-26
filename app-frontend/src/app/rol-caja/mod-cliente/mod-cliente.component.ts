import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CajaService } from '../../gpx-services/caja.service';
import { Router } from '@angular/router';
import { ruta_CajaBoard } from '../../gpx-rutas/caja.rutas';
import { GetCliente, ModCliente } from '../../gpx-data/caja.data';

@Component({
  selector: 'app-mod-cliente',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './mod-cliente.component.html',
})
export class CajaModClienteComponent {
  form_cliente: FormGroup;

  flag_fueExitoso: boolean = false;
  flag_fueSolicitado: boolean = false;

  rutas:any = {ruta_CajaBoard}

  constructor(private formBuilder: FormBuilder, private cajaServ:CajaService, private router:Router) {
    this.form_cliente = this.formBuilder.group({
      nit: [''],
      nombre: [''],
      username: [''],
      password: ['']
    });
  }

  onSubmit() {
    this.flag_fueSolicitado = false;

    this.cajaServ.modCliente(this.form_cliente.value as ModCliente).subscribe({
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

  input_nit:number = 0;
  data_cliente: GetCliente = {nit:0,nombre:''};

  flag_existeCliente = false;
  flag_fueClienteSolicitado = false;

  checkCliente(){
    this.cajaServ.getCliente(this.input_nit).subscribe({
      next: (value: GetCliente) => {
        this.data_cliente = value;
        this.flag_fueClienteSolicitado = true;
        this.flag_existeCliente = true;
      },
      complete: ()=>{
        //this.flag_fueClienteSolicitado = true;
      },
      error: (error) => {
        this.flag_fueClienteSolicitado = true;
        this.flag_existeCliente = false;
      }
    });
  }

  navegar(url:string){
    this.router.navigate([url]);
  }
}
