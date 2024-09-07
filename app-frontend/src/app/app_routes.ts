import { Routes } from '@angular/router';
import { TopEntrarComponent } from './top-entrar/top-entrar.component';
import { TopHolaComponent } from './top-hola/top-hola.component';

export const app_routes: Routes = [
    { path:"entrar", component: TopEntrarComponent },
    { path:"", component: TopHolaComponent },

];
