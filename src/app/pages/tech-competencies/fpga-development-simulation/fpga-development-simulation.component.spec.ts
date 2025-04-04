import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpgaDevelopmentSimulationComponent } from './fpga-development-simulation.component';

describe('FpgaDevelopmentSimulationComponent', () => {
  let component: FpgaDevelopmentSimulationComponent;
  let fixture: ComponentFixture<FpgaDevelopmentSimulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FpgaDevelopmentSimulationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FpgaDevelopmentSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
