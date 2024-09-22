import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HolaNavbarComponent } from '../hola-navbar/hola-navbar.component';
import { AuthService } from '../../gpx-services/auth.service';
import { HolaCarruselComponent } from '../hola-carrusel/hola-carrusel.component';
import { HolaEntrarComponent } from '../hola-entrar/hola-entrar.component';


@Component({
  selector: 'gpx-hola',
  standalone: true,
  imports: [RouterLink, RouterOutlet, HolaNavbarComponent, HolaCarruselComponent, HolaEntrarComponent],
  templateUrl: './hola.component.html',
})
export class HolaComponent {
  quiereEntrar:boolean;

  constructor() {
    this.quiereEntrar = false;
  }

}
