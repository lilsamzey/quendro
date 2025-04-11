import { TestBed } from '@angular/core/testing';

import { ReferralsListService } from './referrals-list.service';

describe('ReferralsListService', () => {
  let service: ReferralsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReferralsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
