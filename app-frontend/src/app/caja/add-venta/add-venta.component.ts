import { Component, QueryList, ViewChildren } from '@angular/core';
import { AddProductoComponent } from '../add-producto/add-producto.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-add-venta',
  standalone: true,
  imports: [AddProductoComponent, JsonPipe],
  templateUrl: './add-venta.component.html',
})
export class AddVentaComponent {

  components: number[] = [];
  values: string[] = [];

  @ViewChildren('addProduct') productos!: QueryList<AddProductoComponent>;

  addComponent() {
    this.components.push(this.components.length);  // Adds an index to identify each component
  }

  collectValues() {
    this.values = this.productos.map(component => component.inputValue);
    alert(JSON.stringify(this.values));
  }


/*

input cada producto
  barcode
  unidades
  precio = getPrecio(id-producto)
  subtotal

input 
  nit

checkExistenceOf(nit):{exite:boolean}

pagar({nit:number; productos:{barcode:string;unidades:number}[]}):{factura:number; total: numer}
  server.sesion:
    id-caja: 
    id-sucursal: 
  server.calc
    id-factura: 
    total
  server
    foreach({barcode,unidades}) comprar(id-producto, unidades)
    if(unidades_compra <= unidades_pasillo)
if(quiereDescuento) checkDescuento(id-factura):{factura:number; total_descuento:number}
  server.calc
    total-descuento





*/


}
