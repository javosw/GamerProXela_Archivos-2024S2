import { Routes } from '@angular/router';
import { HolaEntrarComponent } from './hola/hola-entrar/hola-entrar.component';
import { HolaCarruselComponent } from './hola/hola-carrusel/hola-carrusel.component';
import { AdminBoardComponent } from './admin/admin-board/admin-board.component';
import { HolaComponent } from './hola/hola/hola.component';
import { AdminAddEmpleadoComponent } from './admin/admin-add-empleado/admin-add-empleado.component';
import { AdminGetEmpleadosComponent } from './admin/admin-get-empleados/admin-get-empleados.component';

export const gpxRoutes: Routes = [
    { path:"test", component: AdminGetEmpleadosComponent},
    { path:"admin/empleados", component: AdminGetEmpleadosComponent },
    { path:"admin/empleados/add", component: AdminAddEmpleadoComponent },
    { path:"admin/board", component: AdminBoardComponent },
    //{ path:"sin-auth", component: SinAuthComponent },
    //{ path:"entrar", component: HolaEntrarComponent },
    //{ path:"", component: HolaComponent },
    //{ path:'**', component: HolaAuthComponent },
];
