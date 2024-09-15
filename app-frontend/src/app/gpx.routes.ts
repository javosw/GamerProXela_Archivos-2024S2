import { Routes } from '@angular/router';
import { HolaEntrarComponent } from './hola/hola-entrar/hola-entrar.component';
import { HolaCarruselComponent } from './hola/hola-carrusel/hola-carrusel.component';
import { SinAuthComponent } from './sin-auth/sin-auth.component';

export const gpxRoutes: Routes = [
    { path:"sin-auth", component: SinAuthComponent},
    { path:"entrar", component: HolaEntrarComponent },
    { path:"", component: HolaCarruselComponent },
    //{ path:'**', component: HolaAuthComponent },
];
