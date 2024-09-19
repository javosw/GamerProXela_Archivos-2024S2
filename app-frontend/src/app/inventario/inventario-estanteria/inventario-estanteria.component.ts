import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InventarioService } from '../../services/inventario.service';
import { InventarioAddPasilloComponent } from "../inventario-add-pasillo/inventario-add-pasillo.component";

type Producto = { barcode: string; nombre: string; pasillo: number; unidades_bodega: number; unidades_pasillo: number };
type ModProducto = { barcode: string; pasillo: number; unidades_pasillo: number };

@Component({
  selector: 'app-inventario-estanteria',
  standalone: true,
  imports: [InventarioAddPasilloComponent],
  templateUrl: './inventario-estanteria.component.html'
})
export class InventarioEstanteriaComponent {
  productos = new Array<Producto>();
  fueRespuestaRecibida: boolean = false;

  constructor(private inventarioServ: InventarioService, private router: Router) {
  }

  modEstanteria(pPasillo: ModProducto){
    let pBodega: Producto|undefined = this.productos.find((p) => { p.barcode == pPasillo.barcode; });

    if(pBodega != undefined){
      pBodega.unidades_pasillo = pPasillo.unidades_pasillo;
      pBodega.unidades_bodega = pBodega.unidades_bodega - pPasillo.pasillo;
    }
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
}
