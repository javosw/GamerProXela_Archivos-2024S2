import { Routes } from '@angular/router';
import { HolaAuthComponent } from './hola/hola-auth/hola-auth.component';
import { HolaCarruselComponent } from './hola/hola-carrusel/hola-carrusel.component';
import { SinAuthComponent } from './sin-auth/sin-auth.component';

export const gpxRoutes: Routes = [
    { path:"sin-auth", component: SinAuthComponent},
    { path:"entrar", component: HolaAuthComponent },
    { path:"", component: HolaCarruselComponent },
    //{ path:'**', component: HolaAuthComponent },
];
