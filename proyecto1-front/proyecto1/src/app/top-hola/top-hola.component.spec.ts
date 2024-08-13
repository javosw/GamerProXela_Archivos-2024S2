import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHolaComponent } from './top-hola.component';

describe('TopHolaComponent', () => {
  let component: TopHolaComponent;
  let fixture: ComponentFixture<TopHolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopHolaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopHolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
