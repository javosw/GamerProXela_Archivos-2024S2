import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'gpx-hola-auth',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './hola-auth.component.html',
})
export class HolaAuthComponent {
  entrarForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.entrarForm = this.formBuilder.group({
      user: [''],
      password: [''],
    });
  }
  // Replacing a form control value
  // this.formControl1.setValue('my value');
  // entrarForm = new FormGroup({ user: new FormControl(''), password: new FormControl('') });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.entrarForm.value);
  }
}
