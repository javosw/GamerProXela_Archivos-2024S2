import { Component, QueryList, ViewChildren } from '@angular/core';
import { AddProductoComponent } from '../add-producto/add-producto.component';
import { JsonPipe, ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
import { ruta_CajaBoard } from '../data/rutas';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-venta',
  standalone: true,
  imports: [FormsModule, AddProductoComponent, JsonPipe],
  templateUrl: './add-venta.component.html',
})
export class AddVentaComponent {

  ruta_CajaBoard = ruta_CajaBoard;

  components: number[] = [];
  values: string[] = [];

  nit: number = 0;

  constructor(private router: Router) { }

  @ViewChildren('addProduct') productos!: QueryList<AddProductoComponent>;

  addComponent() {
    this.components.push(this.components.length);
  }

  collectValues() {
    this.values = this.productos.map(component => component.barcode);
    alert(JSON.stringify(this.values));
  }


  navegar(url: string) {
    this.router.navigate([url]);
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
