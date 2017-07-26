import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerMapsComponent } from './power-maps.component';

describe('PowerMapsComponent', () => {
  let component: PowerMapsComponent;
  let fixture: ComponentFixture<PowerMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
