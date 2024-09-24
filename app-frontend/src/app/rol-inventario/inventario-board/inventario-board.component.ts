import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ruta_InventEstanteria } from '../../gpx-rutas/invent.rutas';
@Component({
  selector: 'app-inventario-board',
  standalone: true,
  imports: [],
  templateUrl: './inventario-board.component.html'
})
export class InventBoardComponent {
  rutas: any = {ruta_InventEstanteria};

  constructor(private router:Router){}

  navegar(url:string){
    this.router.navigate([url]);
  }

}
