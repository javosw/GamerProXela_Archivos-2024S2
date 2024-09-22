import { Routes } from '@angular/router';
import { HolaEntrarComponent } from './hola/hola-entrar/hola-entrar.component';
import { HolaCarruselComponent } from './hola/hola-carrusel/hola-carrusel.component';
import { AdminBoardComponent } from './rol-admin/admin-board/admin-board.component';
import { HolaComponent } from './hola/hola/hola.component';
import { AdminAddEmpleadoComponent } from './rol-admin/admin-add-empleado/admin-add-empleado.component';
import { AdminGetEmpleadosComponent } from './rol-admin/admin-get-empleados/admin-get-empleados.component';
import { BodegaBoardComponent } from './rol-bodega/bodega-board/bodega-board.component';
import { BodegaGetProductosComponent } from './rol-bodega/bodega-get-productos/bodega-get-productos.component';
import { BodegaAddProductoComponent } from './rol-bodega/bodega-add-producto/bodega-add-producto.component';
import { InventarioAddPasilloComponent } from './rol-inventario/inventario-add-pasillo/inventario-add-pasillo.component';
import { InventarioBoardComponent } from './rol-inventario/inventario-board/inventario-board.component';
import { InventarioEstanteriaComponent } from './rol-inventario/inventario-estanteria/inventario-estanteria.component'; 
import { CajaBoardComponent } from './rol-caja/caja-board/caja-board.component';
import { AddVentaComponent } from './rol-caja/add-venta/add-venta.component';

export const gpxRoutes: Routes = [
    { path:"test", component: AddVentaComponent},
    { path:"caja/board", component: CajaBoardComponent },
    { path:"bodega/board", component: BodegaBoardComponent },
    { path:"bodega/productos", component: BodegaGetProductosComponent },
    { path:"bodega/productos/add", component: BodegaAddProductoComponent },
    { path:"inventario/board", component: InventarioBoardComponent },
    { path:"inventario/estanteria", component: InventarioEstanteriaComponent },
    { path:"inventario/estanteria/mod", component: InventarioAddPasilloComponent },
    { path:"admin/empleados", component: AdminGetEmpleadosComponent },
    { path:"admin/empleados/add", component: AdminAddEmpleadoComponent },
    { path:"admin/board", component: AdminBoardComponent },
    //{ path:"sin-auth", component: SinAuthComponent },
    //{ path:"entrar", component: HolaEntrarComponent },
    //{ path:"", component: HolaComponent },
    //{ path:'**', component: HolaAuthComponent },
];
