import { Routes } from '@angular/router';
import { AdminBoardComponent } from '../rol-admin/admin-board/admin-board.component';
import { AdminAddEmpleadoComponent } from '../rol-admin/admin-add-empleado/admin-add-empleado.component';
import { AdminGetEmpleadosComponent } from '../rol-admin/admin-get-empleados/admin-get-empleados.component';
import { BodegaBoardComponent } from '../rol-bodega/bodega-board/bodega-board.component';
import { BodegaGetProductosComponent } from '../rol-bodega/bodega-get-productos/bodega-get-productos.component';
import { BodegaAddProductoComponent } from '../rol-bodega/bodega-add-producto/bodega-add-producto.component';
import { InventAddPasilloComponent } from '../rol-inventario/inventario-add-pasillo/inventario-add-pasillo.component';
import { InventBoardComponent } from '../rol-inventario/inventario-board/inventario-board.component';
import { InventEstanteriaComponent } from '../rol-inventario/inventario-estanteria/inventario-estanteria.component';
import { CajaBoardComponent } from '../rol-caja/caja-board/caja-board.component';
import { CajaAddVentaComponent } from '../rol-caja/add-venta/add-venta.component';

import * as bodega from '../gpx-rutas/bodega.rutas'
import * as admin from '../gpx-rutas/admin.rutas';
import * as caja from '../gpx-rutas/caja.rutas';
import * as invent from '../gpx-rutas/invent.rutas';
import { CajaAddClienteComponent } from '../rol-caja/add-cliente/add-cliente.component';
import { CajaModClienteComponent } from '../rol-caja/mod-cliente/mod-cliente.component';
import { MejoresVentasComponent } from '../rol-admin/mejores-ventas/mejores-ventas.component';
import { MejoresClientesComponent } from '../rol-admin/mejores-clientes/mejores-clientes.component';

export const gpxRoutes: Routes = [
    { path: "test", component: CajaAddVentaComponent },
    { path: caja.ruta_CajaBoard, component: CajaBoardComponent },
    { path: caja.ruta_CajaAddVenta, component: CajaAddVentaComponent },
    { path: caja.ruta_CajaAddCliete, component: CajaAddClienteComponent },
    { path: caja.ruta_CajaModCliente, component: CajaModClienteComponent },
    { path: bodega.ruta_BodegaBoard, component: BodegaBoardComponent },
    { path: bodega.ruta_BodegaGetProductos, component: BodegaGetProductosComponent },
    { path: bodega.ruta_BodegaAddProducto, component: BodegaAddProductoComponent },
    { path: invent.ruta_InventBoard, component: InventBoardComponent },
    { path: invent.ruta_InventEstanteria, component: InventEstanteriaComponent },
    { path: invent.ruta_InventAddPasillo, component: InventAddPasilloComponent },
    { path: admin.ruta_AdminGetEmpleados, component: AdminGetEmpleadosComponent },
    { path: admin.ruta_AdminAddEmpleado, component: AdminAddEmpleadoComponent },
    { path: admin.ruta_AdminGetMejoresVentas, component: MejoresVentasComponent },
    { path: admin.ruta_AdminGetMejoresClientes, component: MejoresClientesComponent },
    { path: admin.ruta_AdminBoard, component: AdminBoardComponent },
    //{ path:"sin-auth", component: SinAuthComponent },
    //{ path:"entrar", component: HolaEntrarComponent },
    //{ path:"", component: HolaComponent },
    //{ path:'**', component: HolaAuthComponent },
];
