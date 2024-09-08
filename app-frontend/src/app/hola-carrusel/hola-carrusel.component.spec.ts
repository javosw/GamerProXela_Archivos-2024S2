import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolaCarruselComponent } from './hola-carrusel.component';

describe('HolaCarruselComponent', () => {
  let component: HolaCarruselComponent;
  let fixture: ComponentFixture<HolaCarruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HolaCarruselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolaCarruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
