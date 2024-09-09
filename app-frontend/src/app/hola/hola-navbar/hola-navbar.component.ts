import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'gpx-hola-navbar',
  standalone: true,
  imports: [RouterLink, RouterOutlet, HolaNavbarComponent],
  templateUrl: './hola-navbar.component.html',
})
export class HolaNavbarComponent {

}
