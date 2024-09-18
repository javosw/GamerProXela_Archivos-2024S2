import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bodega-board',
  standalone: true,
  imports: [],
  templateUrl: './bodega-board.component.html'
})
export class BodegaBoardComponent {

  constructor(private router:Router){
  }

  navegar(url:string){
    this.router.navigate([url]);
  }

}
