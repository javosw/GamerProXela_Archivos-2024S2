import { Routes } from '@angular/router';
import { HolaAuthComponent } from './hola/hola-auth/hola-auth.component';
import { HolaCarruselComponent } from './hola/hola-carrusel/hola-carrusel.component';

export const app_routes: Routes = [
    { path:"entrar", component: HolaAuthComponent },
    { path:"", component: HolaCarruselComponent },
];
