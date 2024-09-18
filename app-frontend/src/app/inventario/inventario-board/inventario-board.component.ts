import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventario-board',
  standalone: true,
  imports: [],
  templateUrl: './inventario-board.component.html'
})
export class InventarioBoardComponent {

  constructor(private router:Router){
  }

  navegar(url:string){
    this.router.navigate([url]);
  }

}
