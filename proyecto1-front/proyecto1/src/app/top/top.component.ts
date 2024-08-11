import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// ng g c top
@Component({
  selector: 'app-top',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './top.component.html',
  styleUrl: './top.component.css'
})
export class TopComponent {

}
