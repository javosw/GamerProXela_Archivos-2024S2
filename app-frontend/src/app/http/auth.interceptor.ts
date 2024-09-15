import { HttpClient, HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

// ng g interceptor /http/auth
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(`@josq[intercept=${req.url}]`);
  let router: Router = inject(Router);
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        console.error('@josq[401:Sin Autorizacion]');
      }
      else {
        console.error(`@josq[${error.status}]`);
      }
      router.navigate(['sin-auth']);

      return throwError(() => error);
    })
  );
  // si se obtiene un error en el error de respuesta: comparar rutas o redireccionar o mensaje rol incorrecto
};
