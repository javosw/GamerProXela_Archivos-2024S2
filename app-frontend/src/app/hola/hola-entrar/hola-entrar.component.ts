import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'gpx-hola-auth',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './hola-entrar.component.html',
})
export class HolaEntrarComponent {
  entrarForm: FormGroup;
  tieneSesion: boolean;

  constructor(private formBuilder: FormBuilder, private auth:AuthService) {
    this.tieneSesion = true;
    this.entrarForm = this.formBuilder.group({
      user: [''],
      pass: [''],
    });
  }
  // Replacing a form control value
  // this.formControl1.setValue('my value');
  // entrarForm = new FormGroup({ user: new FormControl(''), password: new FormControl('') });

  ngOnInit(){
    this.auth.tieneSesion.subscribe((val)=>{this.tieneSesion = val;});
  }

  onSubmit() {

    //this.auth.checkCredencialesWithForm(this.entrarForm.value);
    console.log(`@entrar[form=${JSON.stringify(this.entrarForm.value)}]`);
    //console.log(this.entrarForm.get("user")?.value+" : "+this.entrarForm.get("pass")?.value);
    this.auth.checkCredenciales(this.entrarForm.value);


    //console.warn(this.entrarForm.value);
  }
}
