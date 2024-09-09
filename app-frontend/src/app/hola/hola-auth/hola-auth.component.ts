import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../../injectables/auth.service';

@Component({
  selector: 'gpx-hola-auth',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './hola-auth.component.html',
})
export class HolaAuthComponent {
  entrarForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private auth:AuthService) {
    this.entrarForm = this.formBuilder.group({
      user: [''],
      password: [''],
    });
  }
  // Replacing a form control value
  // this.formControl1.setValue('my value');
  // entrarForm = new FormGroup({ user: new FormControl(''), password: new FormControl('') });

  onSubmit() {
    this.auth.checkCredenciales(this.entrarForm.value);

    //console.warn(this.entrarForm.value);
  }
}
