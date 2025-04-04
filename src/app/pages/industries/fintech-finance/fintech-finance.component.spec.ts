import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FintechFinanceComponent } from './fintech-finance.component';

describe('FintechFinanceComponent', () => {
  let component: FintechFinanceComponent;
  let fixture: ComponentFixture<FintechFinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FintechFinanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FintechFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
