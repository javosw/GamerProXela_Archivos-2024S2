import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

type UsuarioAuth = { username: string, rol: string, nombre: string };

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tieneSesion: BehaviorSubject<boolean>;

  constructor(private http: HttpClient, private router: Router) {
    this.tieneSesion = new BehaviorSubject(false);
  }

  checkCredenciales(loginData: AbstractControl) {
    let url: string = 'http://localhost/gpx/entrar';

    this.http.post<UsuarioAuth>(url, loginData).subscribe({
      next: (response: UsuarioAuth) => {
        console.log(`@AuthService[next=${JSON.stringify(response)}]`);
        this.tieneSesion.next(true);

        if (response.rol == 'administracion') {
          this.router.navigate(['admin/board']);
        }
        else if (response.rol == 'inventario') {
          this.router.navigate(['inventario/board']);
        }
        else if (response.rol == 'bodega') {
          this.router.navigate(['bodega/board']);
        }
        else if (response.rol == 'caja') {
          this.router.navigate(['caja/board']);
        }
      },
      error: (error) => {
        console.error("@AuthService[error]")
        this.tieneSesion.next(false);
      }
    });
  }

}
