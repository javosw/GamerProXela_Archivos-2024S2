import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HolaNavbarComponent } from '../hola/hola-navbar/hola-navbar.component';
import { AuthService } from '../gpx-services/auth.service';
import { HolaComponent } from '../hola/hola/hola.component';

// .angular
// ng g c gpx
// .angular/src/app/gpx
@Component({
  selector: 'gpx',
  standalone: true,
  imports: [RouterLink, RouterOutlet, HolaComponent],
  templateUrl: './gpx.component.html',
})
export class GpxComponent {
  tieneSesion: boolean;

  constructor(private auth: AuthService) {
    this.tieneSesion = this.auth.tieneSesion.value;
  }

  ngOnInit(){
    this.auth.tieneSesion.subscribe((val)=>{this.tieneSesion = val;});
  }
}
