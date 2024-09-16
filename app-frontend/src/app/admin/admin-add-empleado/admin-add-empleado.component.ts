import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'gpx-admin-add-empleado',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './admin-add-empleado.component.html',
})
export class AdminAddEmpleadoComponent {
  empleadoForm: FormGroup;
  fueAgregado: boolean;

  constructor(private formBuilder: FormBuilder) {
    this.fueAgregado = true;
    this.empleadoForm = this.formBuilder.group({
      dpi: [''],
      nombre: [''],
      sucursal: [''],
      rol: [''],
      username: [''],
      password: [''],
    });
  }

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

  onSubmit() {
  }

}
