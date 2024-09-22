import { ViewportScroller } from '@angular/common';
import { Component, SimpleChanges } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CajaService } from '../../services/caja.service';
import { GetProducto } from '../data/CajaTipos';

@Component({
  selector: 'gpx-add-producto',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-producto.component.html',
})
export class AddProductoComponent {
  input_barcode = '';
  input_unidades = 0;

  http_producto:GetProducto = { barcode:'',precio:0,nombre:'' };
  flag_existeProducto = false;
  flag_fueEnviado = false;

  constructor(private cajaServ: CajaService, private viewportScroller: ViewportScroller) { }

  getPrecio(barcode: string) {
    this.http_producto = { barcode:'',precio:0,nombre:'' };
    this.flag_existeProducto = false;
    this.flag_fueEnviado = false;

    this.cajaServ.getPrecio(barcode).subscribe({
      next: (value: GetProducto) => {
        this.http_producto = value;
        this.flag_fueEnviado = true;
        this.flag_existeProducto = true;
      },
      complete: ()=>{
        this.flag_fueEnviado = true;
      },
      error: (error) => {
        this.flag_fueEnviado = true;
        this.flag_existeProducto = false;
      }
    });
  }

  ngAfterViewInit(): void {
    this.viewportScroller.scrollToPosition([0, document.body.scrollHeight]);
  }

}
