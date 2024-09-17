import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tieneSesion:BehaviorSubject<boolean>;

  constructor(private http: HttpClient, private router: Router) { 
    this.tieneSesion = new BehaviorSubject(false);
  }

  checkCredenciales(loginData: AbstractControl) {
    let url: string = 'http://localhost/gpx/entrar';

    this.http.post<{ username:string, rol:string, nombre:string }>(url, loginData).subscribe(
      {
        next: (response: { username:string, rol:string, nombre:string }) => {
          console.log(`@AuthService[next=${JSON.stringify(response)}]`);
          this.tieneSesion.next(true);

          //let user = response as { username:string, rol:string, nombre:string };

          if(response.rol == 'administracion'){
            this.router.navigate(['admin/board']);
          }
        },
        error: (error) => {
          console.error("@AuthService[error]")
          this.tieneSesion.next(false);
        }
      }
    );

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
