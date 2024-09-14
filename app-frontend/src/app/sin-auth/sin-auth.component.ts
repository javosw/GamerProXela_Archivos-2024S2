import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sin-auth',
  standalone: true,
  imports: [],
  templateUrl: './sin-auth.component.html',
})
export class SinAuthComponent {

  constructor(private router:Router){
  }

  toEntrar(){
    this.router.navigate(['entrar']);
  }
}
