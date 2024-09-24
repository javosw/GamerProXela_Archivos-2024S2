import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { UsuarioAuth } from '../gpx-data/auth.data';
import { ruta_AdminBoard } from '../gpx-rutas/admin.rutas';
import { ruta_InventBoard } from '../gpx-rutas/invent.rutas';
import { ruta_BodegaBoard } from '../gpx-rutas/bodega.rutas';
import { ruta_CajaBoard } from '../gpx-rutas/caja.rutas';
import { api_HolaEntrar } from '../gpx-data/gpx-api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tieneSesion: BehaviorSubject<boolean>;

  constructor(private http: HttpClient, private router: Router) {
    this.tieneSesion = new BehaviorSubject(false);
  }

  checkCredenciales(loginData: AbstractControl) {
    let url: string = api_HolaEntrar;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post<UsuarioAuth>(url, loginData,{headers:headers}).subscribe({
      next: (value: UsuarioAuth) => {
        this.tieneSesion.next(true);

        if (value.rol == 'administracion') {
          this.router.navigate([ruta_AdminBoard]);
        }
        else if (value.rol == 'inventario') {
          this.router.navigate([ruta_InventBoard]);
        }
        else if (value.rol == 'bodega') {
          this.router.navigate([ruta_BodegaBoard]);
        }
        else if (value.rol == 'caja') {
          this.router.navigate([ruta_CajaBoard]);
        }
      },
      error: (error) => {
        this.tieneSesion.next(false);
      }
    });
  }

}
