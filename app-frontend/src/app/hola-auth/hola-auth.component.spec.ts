import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolaAuthComponent } from './hola-auth.component';

describe('HolaAuthComponent', () => {
  let component: HolaAuthComponent;
  let fixture: ComponentFixture<HolaAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HolaAuthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolaAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
