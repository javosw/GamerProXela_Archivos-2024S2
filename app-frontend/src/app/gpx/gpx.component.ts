import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HolaNavbarComponent } from '../hola/hola-navbar/hola-navbar.component';
import { AuthService } from '../injectables/auth.service';

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
  tieneSesion: boolean;

  constructor(private auth: AuthService) {
    this.tieneSesion = false;
  }

  ngOnInit(){
    this.auth.tieneSesion.subscribe((val)=>{this.tieneSesion = val;});
  }
}
