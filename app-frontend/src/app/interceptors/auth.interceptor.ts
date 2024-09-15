import { HttpClient, HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

// ng g interceptor /http/auth
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(`@intercept[${req.url}]`);

  let router: Router = inject(Router);
  let auth:AuthService = inject(AuthService);
  
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error(`@intercept[${error.status}]`);

      if (error.status === 401 && req.url !== 'http://localhost/gpx/entrar') {
        console.log(`@catchError[navigate=entrar]`);
        router.navigate(['entrar']);
        auth.tieneSesion.next(false);
      }

      return throwError(() => error);
    })
  );
  // si se obtiene un error en el error de respuesta: comparar rutas o redireccionar o mensaje rol incorrecto
};
