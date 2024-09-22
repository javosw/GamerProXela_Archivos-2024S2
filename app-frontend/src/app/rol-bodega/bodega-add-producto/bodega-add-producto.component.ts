import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { InventarioService } from '../../gpx-services/inventario.service';
import { ruta_BodegaBoard } from '../../gpx-rutas/bodega';
import { AddProducto } from '../../gpx-data/bodega';

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

  rutas:any = {ruta_BodegaBoard}

  constructor(private formBuilder: FormBuilder, private inventServ:InventarioService, private router:Router) {
    this.fueAgregado = false;
    this.fueEnviado = false;
    this.productoForm = this.formBuilder.group({
      barcode: [''],
      nombre: [''],
      en_bodega: [''],
    });
  }

  onSubmit() {
    this.fueEnviado = false;

    this.inventServ.addProducto(this.productoForm.value as AddProducto).subscribe({
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
