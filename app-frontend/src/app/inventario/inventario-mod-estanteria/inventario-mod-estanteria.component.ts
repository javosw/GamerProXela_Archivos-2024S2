import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { InventarioService } from '../../services/inventario.service';

@Component({
  selector: 'app-inventario-mod-estanteria',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './inventario-mod-estanteria.component.html'
})
export class InventarioModEstanteriaComponent {
  productoForm: FormGroup;
  fueAgregado: boolean;
  fueEnviado: boolean;

  constructor(private formBuilder: FormBuilder, private bodegaServ:InventarioService, private router:Router) {
    this.fueAgregado = false;
    this.fueEnviado = false;
    this.productoForm = this.formBuilder.group({
      barcode: [''],
      pasillo: [''],
      unidades: [''],
    });
  }

  onSubmit() {
    this.fueEnviado = false;

    this.bodegaServ.modEstanteria(this.productoForm.value).subscribe({
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


}
