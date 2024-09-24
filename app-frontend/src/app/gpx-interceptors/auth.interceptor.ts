import { HttpClient, HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../gpx-services/auth.service';

// ng g interceptor /http/auth
export const authInterceptor: HttpInterceptorFn = (req, next) => {

  let router: Router = inject(Router);
  let auth: AuthService = inject(AuthService);

  let req_wC = req.clone({
    withCredentials: true
  });

  return next(req_wC).pipe(
    catchError((error: HttpErrorResponse) => {

      if (error.status === 401 && req.url !== 'http://localhost/gpx/entrar') {
        router.navigate(['entrar']);
        auth.tieneSesion.next(false);
      }

      return throwError(() => error);
    })
  );
  // si se obtiene un error en el error de respuesta: comparar rutas o redireccionar o mensaje rol incorrecto
};
