import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HolaNavbarComponent } from '../hola/hola-navbar/hola-navbar.component';

// .angular
// ng g c gpx
// .angular/src/app/gpx
@Component({
  selector: 'gpx',
  standalone: true,
  imports: [RouterLink, RouterOutlet, HolaNavbarComponent],
  templateUrl: './gpx.component.html',
})
export class GpxComponent {

}
