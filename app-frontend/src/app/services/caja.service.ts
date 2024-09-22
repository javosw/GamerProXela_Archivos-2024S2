import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { GetCliente, GetPrecio } from '../caja/data/CajaTipos';

@Injectable({
  providedIn: 'root'
})
export class CajaService {

  constructor(private http: HttpClient, private router: Router) { }

  getPrecio(barcode:string): Observable<GetPrecio> {
    let url = 'http://localhost/gpx/productos/precio';

    let httpParams = new HttpParams().set('barcode', barcode);

    return this.http.get<GetPrecio>(url, {params: httpParams});
  }

  getCliente(nit:number): Observable<GetCliente> {
    let url = 'http://localhost/gpx/clientes/nit';

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
