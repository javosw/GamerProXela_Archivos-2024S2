import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BodegaService } from '../../services/bodega.service';

@Component({
  selector: 'app-bodega-add-producto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './bodega-add-producto.component.html'
})
export class BodegaAddProductoComponent {
  productoForm: FormGroup;
  fueAgregado: boolean;
  fueEnviado: boolean;

  constructor(private formBuilder: FormBuilder, private bodegaServ:BodegaService, private router:Router) {
    this.fueAgregado = false;
    this.fueEnviado = false;
    this.productoForm = this.formBuilder.group({
      barcode: [''],
      nombre: [''],
      unidades: [''],
    });
  }

  onSubmit() {
    this.fueEnviado = false;

    this.bodegaServ.addProducto(this.productoForm.value).subscribe({
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
