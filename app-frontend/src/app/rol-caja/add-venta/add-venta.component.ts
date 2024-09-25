import { Component, input, QueryList, ViewChildren } from '@angular/core';
import { CajaAddProductoComponent } from '../add-producto/add-producto.component';
import { JsonPipe, ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
import { ruta_CajaBoard } from '../../gpx-rutas/caja.rutas';
import { FormsModule } from '@angular/forms';
import { CajaService } from '../../gpx-services/caja.service';
import { AddSubVenta, AddVenta, GetCliente } from '../../gpx-data/caja.data';

@Component({
  selector: 'app-add-venta',
  standalone: true,
  imports: [FormsModule, CajaAddProductoComponent, JsonPipe],
  templateUrl: './add-venta.component.html',
})
export class CajaAddVentaComponent {

  constructor(private router: Router, private cajaServ:CajaService) { }

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-= VENTA

  flag_fueVentaSolicitada: boolean = false;
  flag_fueVentaExitosa: boolean = false;

  addVenta() {
    this.flag_fueVentaSolicitada = false;

    let form:AddVenta = this.buildVenta();
    this.cajaServ.addVenta(form).subscribe({
      next: (value: any) => {
        this.flag_fueVentaSolicitada = true;
        this.flag_fueVentaExitosa = true;
      },
      complete: ()=>{
        //this.flag_fueVentaSolicitada = true;
        //this.flag_fueVentaExitosa = true;
      },
      error: (error) => {
        this.flag_fueVentaSolicitada = true;
        this.flag_fueVentaExitosa = false;
      }
    });
  }

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-= CARRITO DATA

  buildVenta():AddVenta {
    let productos: Array<AddSubVenta> = this.query_AddProducto.map((component) => { 
      return component.buildSubVenta();
    });
    let total = this.getTotal(productos);
    let nit = this.data_cliente.nit;
    let fecha = this.input_fecha;

    console.log(JSON.stringify(productos));

    return {
      nit: nit,
      total: total,
      fecha: fecha,
      productos: productos,
    }
  }

  getTotal(productos:Array<AddSubVenta>):number{
    let total:number = 0;
    for (let index = 0; index < productos.length; index++) {
      if(productos[index]){
        total = total + productos[index].subtotal;
      }
    }
    return total;
  }

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-= CARRITO UI

  loop_AddProducto: Array<number> = new Array();
  @ViewChildren('addProduct') query_AddProducto!: QueryList<CajaAddProductoComponent>;

  addComponent() {
    this.loop_AddProducto.push(this.loop_AddProducto.length);
  }

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-= CLIENTE

  input_fecha: string = '';
  input_nit: number = 0;
  data_cliente: GetCliente = {nit:0,nombre:''};

  flag_existeCliente = false;
  flag_fueClienteSolicitado = false;

  getCliente(nit:number){
    this.cajaServ.getCliente(nit).subscribe({
      next: (value: GetCliente) => {
        this.data_cliente = value;
        this.flag_fueClienteSolicitado = true;
        this.flag_existeCliente = true;
      },
      complete: ()=>{
        //this.flag_fueClienteSolicitado = true;
      },
      error: (error) => {
        this.flag_fueClienteSolicitado = true;
        this.flag_existeCliente = false;
      }
    });
  }

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-= RUTAS
  
  rutas:any = {
    ruta_CajaBoard
  };

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
