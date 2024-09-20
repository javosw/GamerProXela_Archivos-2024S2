import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  constructor(private http: HttpClient, private router: Router) { }

  addProducto(form: AbstractControl): Observable<any> {
    let url = 'http://localhost/gpx/productos/add';
    return this.http.post<any>(url, form);
  }

  getProductos(): Observable<any> {
    return of([
      { barcode: 'XCAASD', nombre: 'bebida2', pasillo: 0, unidades_bodega: 31, unidades_pasillo: 5},
      { barcode: 'SLDKAS', nombre: 'fruta1', pasillo: 5, unidades_bodega: 23, unidades_pasillo: 3},
      { barcode: 'QWEQWW', nombre: 'bebida1', pasillo: 9, unidades_bodega: 12, unidades_pasillo: 6},
      { barcode: 'SDFSDF', nombre: 'fruta2', pasillo: 2, unidades_bodega: 41, unidades_pasillo: 4},
      { barcode: 'GHJGXX', nombre: 'ropa1', pasillo: 5, unidades_bodega: 31, unidades_pasillo: 6}
    ]);

    /*
    let url = 'http://localhost/gpx/productos';
    return this.http.get<any>(url);*/
  }

  // form.value: { barcode: string, pasillo: number, unidades: number }
  addPasillo(form: AbstractControl): Observable<any>{
    return of({http:200});
    
    /*let url = 'http://localhost/gpx/estanteria/mod';
    return this.http.post<any>(url, form);*/
  }
}
