import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, never, Observable, of, Subject } from 'rxjs';
import { api_InventAddPasillo, api_InventAddProducto, api_InventGetProducto, api_InventGetProductos } from '../gpx-data/gpx-api';
import { AddPasillo, Producto } from '../gpx-data/invent';
import { AddProducto } from '../gpx-data/bodega';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  constructor(private http: HttpClient, private router: Router) { }


  getProducto(barcode: string): Observable<Producto> {
    let p = this.productos.find((p) => { return p.barcode == barcode })
    if (p != undefined) return of(p);
    throw new Error('{http:400}');

    let url = api_InventGetProducto + '?barcode=${barcode}';
    return this.http.get<any>(url);
  }

  addProducto(form: AddProducto): Observable<any> {
    let url = api_InventAddProducto;
    return this.http.post<any>(url, form);
  }

  productos: Producto[] = [
    { barcode: 'XCAASD', nombre: 'bebida2', pasillo: -1, en_bodega: 31, en_pasillo: 0 },
    { barcode: 'SLDKAS', nombre: 'fruta1', pasillo: 5, en_bodega: 23, en_pasillo: 23 },
    { barcode: 'QWEQWW', nombre: 'bebida1', pasillo: -1, en_bodega: 12, en_pasillo: 0 },
    { barcode: 'SDFSDF', nombre: 'fruta2', pasillo: 2, en_bodega: 41, en_pasillo: 20 },
    { barcode: 'GHJGXX', nombre: 'ropa1', pasillo: -1, en_bodega: 31, en_pasillo: 0 },
  ];

  getProductos(): Observable<Producto[]> {
    return of(this.productos);

    let url = api_InventGetProductos;
    return this.http.get<any>(url);
  }

  // form.value: { barcode: string, pasillo: number, unidades: number }
  addPasillo(form: AddPasillo): Observable<any> {
    return of({ http: 200 });

    let url = api_InventAddPasillo;
    return this.http.post<any>(url, form);
  }
}
