import { TestBed } from '@angular/core/testing';

import { UpcomingContestResolver } from './upcoming-contest.resolver';

describe('UpcomingContestResolver', () => {
  let resolver: UpcomingContestResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(UpcomingContestResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
