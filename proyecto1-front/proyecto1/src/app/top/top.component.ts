import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

// <.angular> ng g c top
// <.angular>/src/app/<top> 
@Component({
  selector: 'app-top',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './top.component.html',
  styleUrl: './top.component.css'
})
export class TopComponent {

}
