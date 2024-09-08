import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolaNavbarComponent } from './hola-navbar.component';

describe('HolaNavbarComponent', () => {
  let component: HolaNavbarComponent;
  let fixture: ComponentFixture<HolaNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HolaNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolaNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
