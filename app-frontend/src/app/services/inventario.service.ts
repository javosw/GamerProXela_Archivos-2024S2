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

  getProducto(barcode: string): Observable<any>{
    if(barcode == 'XCAASD') return of({ barcode: 'XCAASD', nombre: 'bebida2', pasillo: -1, unidades_bodega: 31, unidades_pasillo: 0});
    if(barcode == 'SLDKAS') return of({ barcode: 'SLDKAS', nombre: 'fruta1', pasillo: 5, unidades_bodega: 23, unidades_pasillo: 23} );
    if(barcode == 'QWEQWW') return of({ barcode: 'QWEQWW', nombre: 'bebida1', pasillo: -1, unidades_bodega: 12, unidades_pasillo: 0});
    if(barcode == 'SDFSDF') return of({ barcode: 'SDFSDF', nombre: 'fruta2', pasillo: 2, unidades_bodega: 41, unidades_pasillo: 20} );
    if(barcode == 'GHJGXX') return of({ barcode: 'GHJGXX', nombre: 'ropa1', pasillo: -1, unidades_bodega: 31, unidades_pasillo: 0}  );
    return of({http:400});
        /*
    let url = 'http://localhost/gpx/productos/get?barcode=${barcode}';
    return this.http.get<any>(url);*/
  }

  getProductos(): Observable<any> {
    return of([
      { barcode: 'XCAASD', nombre: 'bebida2',pasillo: -1, unidades_bodega: 31, unidades_pasillo: 0},
      { barcode: 'SLDKAS', nombre: 'fruta1', pasillo: 5, unidades_bodega: 23, unidades_pasillo: 23},
      { barcode: 'QWEQWW', nombre: 'bebida1', pasillo: -1, unidades_bodega: 12, unidades_pasillo: 0},
      { barcode: 'SDFSDF', nombre: 'fruta2', pasillo: 2, unidades_bodega: 41, unidades_pasillo: 20},
      { barcode: 'GHJGXX', nombre: 'ropa1', pasillo: -1, unidades_bodega: 31, unidades_pasillo: 0},  
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
