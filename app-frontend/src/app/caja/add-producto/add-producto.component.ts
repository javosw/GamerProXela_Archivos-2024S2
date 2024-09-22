import { ViewportScroller } from '@angular/common';
import { Component, SimpleChanges } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CajaService } from '../../services/caja.service';
import { GetCliente, GetPrecio } from '../data/CajaTipos';

@Component({
  selector: 'gpx-add-producto',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-producto.component.html',
})
export class AddProductoComponent {

  barcode = '';
  unidades = 0;
  precio = 0;

  constructor(private cajaServ: CajaService, private viewportScroller: ViewportScroller) { }

  getPrecio(barcode: string) {
    this.cajaServ.getPrecio(barcode).subscribe({
      next: (value: GetPrecio) => {
        this.precio = value.precio;
      },
      complete: () => {
      },
      error: (error) => {
      }
    });
  }

  ngAfterViewInit(): void {
    this.viewportScroller.scrollToPosition([0, document.body.scrollHeight]);
  }

}
