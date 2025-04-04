import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddedDevelopmentComponent } from './embedded-development.component';

describe('EmbeddedDevelopmentComponent', () => {
  let component: EmbeddedDevelopmentComponent;
  let fixture: ComponentFixture<EmbeddedDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmbeddedDevelopmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmbeddedDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
