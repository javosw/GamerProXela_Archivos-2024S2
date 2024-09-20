import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ruta_Estanteria } from '../data/rutas';
@Component({
  selector: 'app-inventario-board',
  standalone: true,
  imports: [],
  templateUrl: './inventario-board.component.html'
})
export class InventarioBoardComponent {
  ruta_Estanteria = ruta_Estanteria;

  constructor(private router:Router){}

  navegar(url:string){
    this.router.navigate([url]);
  }

}
