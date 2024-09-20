import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InventarioService } from '../../services/inventario.service';
import { InventarioAddPasilloComponent } from "../inventario-add-pasillo/inventario-add-pasillo.component";
import { Producto, ModProducto } from '../data/InventarioTipos'; 
import { ruta_Estanteria, ruta_AddPasillo, ruta_InventarioBoard } from '../data/rutas';
@Component({
  selector: 'app-inventario-estanteria',
  standalone: true,
  imports: [InventarioAddPasilloComponent],
  templateUrl: './inventario-estanteria.component.html'
})
export class InventarioEstanteriaComponent {
  productos = new Array<Producto>();
  fueRespuestaRecibida: boolean = false;

  ruta_InventarioBoard = ruta_InventarioBoard;
  ruta_AddPasillo = ruta_AddPasillo;

  constructor(private inventarioServ: InventarioService, private router: Router) {
  }

  modEstanteria(pEstanteria: Producto, pPasillo: ModProducto){
    pEstanteria.pasillo = pPasillo.pasillo;
    pEstanteria.unidades_pasillo = pPasillo.unidades_pasillo;
    pEstanteria.unidades_bodega = pEstanteria.unidades_bodega - pPasillo.pasillo;
  }
  
  ngOnInit() {
    this.getProductos();
  }

  getProductos() {
    this.inventarioServ.getProductos().subscribe({
      next: (response: any) => {
        this.productos = response as Producto[];
        this.productos = response;
        this.fueRespuestaRecibida = true;
      },
      complete: () => {
        this.fueRespuestaRecibida = true;
      },
      error: (error) => {
        this.fueRespuestaRecibida = true;
      }
    });
  }


  navegar(url: string) {
    this.router.navigate([url]);
  }

  navegarQuery(url: string, barcode:string) {
    this.router.navigate([url],{ queryParams: { barcode:barcode } });
  }
}
