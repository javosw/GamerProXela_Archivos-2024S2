import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BodegaService {

  constructor(private http: HttpClient, private router: Router) { }

  addProducto(form: AbstractControl): Observable<any> {
    let url = 'http://localhost/gpx/bodega/productos/add';
    return this.http.post<any>(url, form);
  }

  getProductos(): Observable<any> {
    let url = 'http://localhost/gpx/bodega/productos';
    return this.http.get<any>(url);
  }
}
