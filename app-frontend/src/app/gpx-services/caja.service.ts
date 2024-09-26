import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { AddCliente, AddVenta, GetCliente, GetProducto, ModCliente } from '../gpx-data/caja.data';
import { api_CajaAddCliente, api_CajaAddVenta, api_CajaGetCliente, api_CajaGetPrecio, api_CajaModCliente } from '../gpx-data/gpx-api';

@Injectable({
  providedIn: 'root'
})
export class CajaService {

  constructor(private http: HttpClient, private router: Router) { }

  getPrecio(barcode:string): Observable<GetProducto> {
    let url = api_CajaGetPrecio;
    let httpParams = new HttpParams().set('barcode', barcode);

    return this.http.get<GetProducto>(url, {params: httpParams});
  }

  getCliente(nit:number): Observable<GetCliente> {
    let url = api_CajaGetCliente;

    let httpParams = new HttpParams().set('nit', nit);

    return this.http.get<GetCliente>(url, {params: httpParams});
  }

  addVenta(form: AddVenta): Observable<any> {
    let url: string = api_CajaAddVenta;

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(url, form,{headers:headers});
  }

  addCliente(form: AddCliente): Observable<any> {
    let url: string = api_CajaAddCliente;

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(url, form,{headers:headers});
  }

  modCliente(form: ModCliente): Observable<any> {
    let url: string = api_CajaModCliente;

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(url, form,{headers:headers});
  }

}
