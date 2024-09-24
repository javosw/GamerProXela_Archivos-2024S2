import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { GetCliente, GetProducto } from '../gpx-data/caja';
import { api_CajaGetCliente, api_CajaGetPrecio } from '../gpx-data/gpx-api';

@Injectable({
  providedIn: 'root'
})
export class CajaService {

  constructor(private http: HttpClient, private router: Router) { }


  precios:Array<GetProducto> = [
    {barcode:'AAA',precio:5,nombre:'fruto5'},
    {barcode:'QQQ',precio:6,nombre:'libro4'},
    {barcode:'WWW',precio:8,nombre:'bebida7'},
    {barcode:'SSS',precio:9,nombre:'fruto1'},
    {barcode:'DDD',precio:1,nombre:'bebida6'},
    {barcode:'ZZZ',precio:4,nombre:'comida3'},
    {barcode:'XXX',precio:9,nombre:'libro7'},
  ];


//let p = this.precios.find((precio)=>{ return barcode === precio.barcode;});
//if(p!=undefined) return of(p);
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




  /*
  ejemploGet(user: string, pass: string) {
    const params = new HttpParams()
      .set('user', user)
      .set('pass', pass);
    this.http.get(this.url, { params }).subscribe(
      {
        next: (response: any) => {
        },
        error: (error) => {
        }
      }
    );
  }
*/

}
