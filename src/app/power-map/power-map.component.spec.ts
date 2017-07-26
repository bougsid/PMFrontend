import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerMapComponent } from './power-map.component';

describe('PowerMapComponent', () => {
  let component: PowerMapComponent;
  let fixture: ComponentFixture<PowerMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
