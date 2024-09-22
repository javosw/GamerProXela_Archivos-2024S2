import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InventarioService } from '../../gpx-services/inventario.service';
import { Producto, ModProducto } from '../../gpx-data/inventario';
import { ruta_InventAddPasillo, ruta_InventEstanteria } from '../../gpx-rutas/inventario';
@Component({
  selector: 'gpx-mod-estanteria',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './inventario-add-pasillo.component.html'
})
export class InventarioAddPasilloComponent {
  @Input() barcode: string = '';
  @Output() productoChange: EventEmitter<ModProducto> = new EventEmitter();

  producto:Producto = { barcode: '', nombre: '', pasillo: 0, unidades_bodega: 0, unidades_pasillo: 0 };

  addPasilloForm: FormGroup;
  fueAgregado: boolean = false;
  fueEnviado: boolean = false;

  ruta_Estanteria = ruta_InventEstanteria;

  constructor(private formBuilder: FormBuilder, private inventServ: InventarioService, private router: Router, private route: ActivatedRoute) {
    this.addPasilloForm = this.formBuilder.group({
      barcode: [''],
      pasillo: [''],
      unidades: [''],
    });
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      let barcodeQuery = params.get('barcode');
      if(barcodeQuery != null){
        this.barcode = barcodeQuery;
      }
    });

    this.inventServ.getProducto(this.barcode).subscribe({
      next: (response: any) => {
        this.producto = response as Producto;
        this.producto = response;
      },
      complete: () => {
      },
      error: (error) => {
      }
    });
  }

  modEstanteria(formValue: any) {
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
