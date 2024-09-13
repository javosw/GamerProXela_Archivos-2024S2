import { HttpInterceptorFn } from '@angular/common/http';

// ng g interceptor /http/aut
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('JOSQ: ' + req.url);
  return next(req);
  // si se obtiene un error en el error de respuesta: comparar rutas o redireccionar o mensaje rol incorrecto
};
