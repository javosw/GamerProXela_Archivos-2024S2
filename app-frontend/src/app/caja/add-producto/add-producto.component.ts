import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'gpx-add-producto',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './add-producto.component.html',
})
export class AddProductoComponent {

  inputValue: string = '';


}
