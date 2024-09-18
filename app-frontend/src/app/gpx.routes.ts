import { Routes } from '@angular/router';
import { HolaEntrarComponent } from './hola/hola-entrar/hola-entrar.component';
import { HolaCarruselComponent } from './hola/hola-carrusel/hola-carrusel.component';
import { AdminBoardComponent } from './admin/admin-board/admin-board.component';
import { HolaComponent } from './hola/hola/hola.component';
import { AdminAddEmpleadoComponent } from './admin/admin-add-empleado/admin-add-empleado.component';
import { AdminGetEmpleadosComponent } from './admin/admin-get-empleados/admin-get-empleados.component';
import { BodegaBoardComponent } from './bodega/bodega-board/bodega-board.component';
import { BodegaGetProductosComponent } from './bodega/bodega-get-productos/bodega-get-productos.component';
import { BodegaAddProductoComponent } from './bodega/bodega-add-producto/bodega-add-producto.component';
import { InventarioModEstanteriaComponent } from './inventario/inventario-mod-estanteria/inventario-mod-estanteria.component';
import { InventarioBoardComponent } from './inventario/inventario-board/inventario-board.component';

export const gpxRoutes: Routes = [
    { path:"test", component: InventarioBoardComponent},
    { path:"bodega/board", component: BodegaBoardComponent },
    { path:"bodega/productos", component: BodegaGetProductosComponent },
    { path:"bodega/productos/add", component: BodegaAddProductoComponent },
    { path:"inventario/board", component: InventarioBoardComponent },
    { path:"inventario/estanteria/mod", component: InventarioModEstanteriaComponent },
    { path:"admin/empleados", component: AdminGetEmpleadosComponent },
    { path:"admin/empleados/add", component: AdminAddEmpleadoComponent },
    { path:"admin/board", component: AdminBoardComponent },
    //{ path:"sin-auth", component: SinAuthComponent },
    //{ path:"entrar", component: HolaEntrarComponent },
    //{ path:"", component: HolaComponent },
    //{ path:'**', component: HolaAuthComponent },
];
