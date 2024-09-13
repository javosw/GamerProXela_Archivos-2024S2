import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    console.log('JOSQ: ' + req.url);
    return next(req);
    // si se obtiene un error en el error de respuesta: comparar rutas o redireccionar o mensaje rol incorrecto
}

