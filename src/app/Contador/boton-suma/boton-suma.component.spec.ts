import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonSumaComponent } from './boton-suma.component';

describe('BotonSumaComponent', () => {
  let component: BotonSumaComponent;
  let fixture: ComponentFixture<BotonSumaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonSumaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonSumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
