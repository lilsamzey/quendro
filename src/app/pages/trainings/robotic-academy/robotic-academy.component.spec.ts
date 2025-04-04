import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboticAcademyComponent } from './robotic-academy.component';

describe('RoboticAcademyComponent', () => {
  let component: RoboticAcademyComponent;
  let fixture: ComponentFixture<RoboticAcademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoboticAcademyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoboticAcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
