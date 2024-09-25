import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InventarioService } from '../../gpx-services/inventario.service';
import { Producto, AddPasillo } from '../../gpx-data/invent.data';
import { ruta_InventEstanteria } from '../../gpx-rutas/invent.rutas';
@Component({
  selector: 'gpx-mod-estanteria',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './inventario-add-pasillo.component.html'
})
export class InventAddPasilloComponent {
  @Input() barcode: string = '';
  @Output() productoChange: EventEmitter<AddPasillo> = new EventEmitter();

  producto:Producto = { barcode: '', nombre: '', pasillo: 0, en_bodega: 0, en_pasillo: 0 };

  addPasilloForm: FormGroup;
  fueAgregado: boolean = false;
  fueEnviado: boolean = false;

  rutas:any = {ruta_InventEstanteria};

  constructor(private formBuilder: FormBuilder, private inventServ: InventarioService, private router: Router, private route: ActivatedRoute) {
    this.addPasilloForm = this.formBuilder.group({
      barcode: [''],
      pasillo: [''],
      en_pasillo: [''],
    });
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      let barcodeQuery = params.get('barcode');
      if(barcodeQuery){
        this.barcode = barcodeQuery;
      }
    });

    this.inventServ.getProducto(this.barcode).subscribe({
      next: (value: Producto) => {
        this.producto = value;
      },
      complete: () => {
      },
      error: (error) => {
      }
    });
  }

  modEstanteria(form: AddPasillo) {
    this.productoChange.emit({ 
      barcode: form.barcode, 
      en_pasillo: form.en_pasillo, 
      pasillo: form.pasillo 
    });
  }

  onSubmit() {
    this.fueEnviado = false;
    let formValue = this.addPasilloForm.value as AddPasillo;

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
