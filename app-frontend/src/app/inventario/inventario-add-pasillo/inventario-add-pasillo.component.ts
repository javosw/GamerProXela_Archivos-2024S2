import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { InventarioService } from '../../services/inventario.service';

type Producto = { barcode: string; nombre: string; pasillo: number; unidades_bodega: number; unidades_pasillo: number };
type ModProducto = { barcode: string; pasillo: number; unidades_pasillo: number };

@Component({
  selector: 'gpx-mod-estanteria',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './inventario-add-pasillo.component.html'
})
export class InventarioAddPasilloComponent {
  @Input() barcode: string = '';
  @Output() productoChange: EventEmitter<ModProducto> = new EventEmitter();

  activar: boolean = false;

  toggleActivar(){
    this.activar = !this.activar;
  }

  addPasilloForm: FormGroup;
  fueAgregado: boolean = false;
  fueEnviado: boolean = false;

  ruta_InventarioBoard = 'inventario/board';

  constructor(private formBuilder: FormBuilder, private inventServ: InventarioService, private router: Router) {
    this.addPasilloForm = this.formBuilder.group({
      barcode: [''],
      pasillo: [''],
      unidades: [''],
    });
  }

  modEstanteria(formValue:any){
    let pForm = formValue as { barcode: string, pasillo: number, unidades: number };
    this.productoChange.emit({ barcode: pForm.barcode, unidades_pasillo: pForm.unidades, pasillo: pForm.pasillo });
  }

  onSubmit() {
    this.fueEnviado = false;
    let formValue = this.addPasilloForm.value;
    
    this.inventServ.addPasillo(formValue).subscribe({
      next: (response: any) => {
        this.fueEnviado = true;
        this.fueAgregado = true;
        this.modEstanteria(formValue);
      },
      complete: () => {
        this.fueEnviado = true;
      },
      error: (error) => {
        this.fueEnviado = true;
        this.fueAgregado = false;
      }
    });
  }

  navegar(url: string) {
    this.router.navigate([url]);
  }


}
