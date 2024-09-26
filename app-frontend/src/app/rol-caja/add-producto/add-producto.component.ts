import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CajaService } from '../../gpx-services/caja.service';
import { AddSubVenta, GetProducto } from '../../gpx-data/caja.data';

@Component({
  selector: 'gpx-add-producto',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-producto.component.html',
})
export class CajaAddProductoComponent {
  protected input_barcode = '';
  protected input_unidades = 1;

  data_producto:GetProducto = { barcode:'',precio:0,nombre:'' };
  flag_existeProducto = false;
  flag_fueEnviado = false;

  constructor(private cajaServ: CajaService, private viewportScroller: ViewportScroller) { }

  buildSubVenta():AddSubVenta{
    let barcode:string = this.data_producto.barcode;
    let unidades:number = this.input_unidades;
    let subtotal:number = this.data_producto.precio * unidades;

    return {
      barcode: barcode,
      unidades: unidades,
      subtotal: subtotal
    }
  }

  getPrecio(barcode: string) {
    this.data_producto = { barcode:'',precio:0,nombre:'' };
    this.flag_existeProducto = false;
    this.flag_fueEnviado = false;

    this.cajaServ.getPrecio(barcode).subscribe({
      next: (value: GetProducto) => {
        this.data_producto = value;
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
