import { ViewportScroller } from '@angular/common';
import { Component, SimpleChanges } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'gpx-add-producto',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './add-producto.component.html',
})
export class AddProductoComponent {

  barcode = '';
  unidades =  1;
  precio = 10;

  constructor(private viewportScroller: ViewportScroller) { }

  alerta(){
    alert(this.barcode);
  }

  ngAfterViewInit(): void {
    this.viewportScroller.scrollToPosition([0, document.body.scrollHeight]);
  }

/*
input cada producto
  barcode
  unidades
  precio = getPrecio(id-producto)
  subtotal

input 
  nit

*/
}
