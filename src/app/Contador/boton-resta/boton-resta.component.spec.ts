import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonRestaComponent } from './boton-resta.component';

describe('BotonRestaComponent', () => {
  let component: BotonRestaComponent;
  let fixture: ComponentFixture<BotonRestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonRestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonRestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
