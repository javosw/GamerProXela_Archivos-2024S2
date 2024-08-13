import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopEntrarComponent } from './top-entrar.component';

describe('TopEntrarComponent', () => {
  let component: TopEntrarComponent;
  let fixture: ComponentFixture<TopEntrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopEntrarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopEntrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
