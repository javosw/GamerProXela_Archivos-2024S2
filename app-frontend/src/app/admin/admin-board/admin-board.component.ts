import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gpx-admin-board',
  standalone: true,
  imports: [],
  templateUrl: './admin-board.component.html',
})
export class AdminBoardComponent {

  constructor(private router:Router){
  }

  navegar(url:string){
    this.router.navigate([url]);
  }
}
