import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InventarioService } from '../../gpx-services/inventario.service';
import { InventAddPasilloComponent } from "../../rol-inventario/inventario-add-pasillo/inventario-add-pasillo.component";
import { Producto, ModProducto } from '../../gpx-data/inventario'; 
import { ruta_InventEstanteria, ruta_InventAddPasillo, ruta_InventBoard } from '../../gpx-rutas/inventario';

@Component({
  selector: 'app-inventario-estanteria',
  standalone: true,
  imports: [InventAddPasilloComponent],
  templateUrl: './inventario-estanteria.component.html'
})
export class InventEstanteriaComponent {
  productos = new Array<Producto>();
  fueRespuestaRecibida: boolean = false;

  rutas: any = {
    ruta_InventBoard,
    ruta_InventAddPasillo
  };

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
