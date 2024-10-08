import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../gpx-services/admin.service';
import { AddEmpleado } from '../../gpx-data/admin.data';

@Component({
  selector: 'gpx-admin-add-empleado',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './admin-add-empleado.component.html',
})
export class AdminAddEmpleadoComponent {
  ruta_AdminBoard = 'admin/board';

  empleadoForm: FormGroup;
  fueAgregado: boolean;
  fueEnviado: boolean;

  constructor(private formBuilder: FormBuilder, private adminServ:AdminService, private router:Router) {
    this.fueAgregado = false;
    this.fueEnviado = false;
    this.empleadoForm = this.formBuilder.group({
      dpi: [''],
      nombre: [''],
      sucursal: [''],
      rol: [''],
      username: [''],
      password: [''],
    });
  }

  onSubmit() {
    this.fueEnviado = false;

    this.adminServ.addEmpleado(this.empleadoForm.value as AddEmpleado).subscribe({
      next: (response: any) => {
        this.fueEnviado = true;
        this.fueAgregado = true;
      },
      complete: ()=>{
        this.fueEnviado = true;
      },
      error: (error) => {
        this.fueEnviado = true;
        this.fueAgregado = false;
      }
    });
  }

  navegar(url:string){
    this.router.navigate([url]);
  }


// ZZZ[FORM] --------------------------------------------

  getRol() {
    return this.empleadoForm.get('rol')?.value;
  }
  setRol(rol: string) {
    this.empleadoForm.get('rol')?.setValue(rol);
  }

  getSucursal() {
    return this.empleadoForm.get('sucursal')?.value;
  }
  setSucursal(sucursal: string) {
    this.empleadoForm.get('sucursal')?.setValue(sucursal);
  }

}
