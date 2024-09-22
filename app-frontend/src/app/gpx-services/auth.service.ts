import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { UsuarioAuth } from '../gpx-data/auth';
import { ruta_AdminBoard } from '../gpx-rutas/admin';
import { ruta_InventBoard } from '../gpx-rutas/inventario';
import { ruta_BodegaBoard } from '../gpx-rutas/bodega';
import { ruta_CajaBoard } from '../gpx-rutas/caja';
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

    this.http.post<UsuarioAuth>(url, loginData).subscribe({
      next: (response: UsuarioAuth) => {
        console.log(`@AuthService[next=${JSON.stringify(response)}]`);
        this.tieneSesion.next(true);

        if (response.rol == 'administracion') {
          this.router.navigate([ruta_AdminBoard]);
        }
        else if (response.rol == 'inventario') {
          this.router.navigate([ruta_InventBoard]);
        }
        else if (response.rol == 'bodega') {
          this.router.navigate([ruta_BodegaBoard]);
        }
        else if (response.rol == 'caja') {
          this.router.navigate([ruta_CajaBoard]);
        }
      },
      error: (error) => {
        console.error("@AuthService[error]")
        this.tieneSesion.next(false);
      }
    });
  }

}
