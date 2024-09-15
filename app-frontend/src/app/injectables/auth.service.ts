import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = 'http://localhost/gpx/entrar';
  tieneSesion: Subject<boolean> = new Subject();

  constructor(private http: HttpClient, private router: Router) { 
  }

 // estaAutenticado: Subject<boolean>;

  checkCredenciales(loginData: AbstractControl) {
    this.http.post(this.url, loginData).subscribe(
      {
        next: (response: any) => {
          console.log(`@service[next=${JSON.stringify(response)}]`);
          this.tieneSesion.next(true);
          //console.log(response);
          //if (response.success) { this.router.navigate(['/dashboard']); } else { console.error('Login failed:', response.message); }
        },
        error: (error) => {
          console.error("@service[error]")
          this.tieneSesion.next(false);

          //console.error('Error occurred:', error);
        }
      }
    );

  }

  ejemploGet(user: string, pass: string) {
    const params = new HttpParams()
      .set('user', user)
      .set('pass', pass);
    this.http.get(this.url, { params }).subscribe(
      {
        next: (response: any) => {
          //console.log(response);
          //if (response.success) { this.router.navigate(['/dashboard']); } else { console.error('Login failed:', response.message); }
        },
        error: (error) => {
          //console.error('Error occurred:', error);
        }
      }
    );
  }


}
