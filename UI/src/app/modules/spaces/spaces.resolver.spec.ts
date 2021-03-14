import { TestBed } from '@angular/core/testing';

import { SpacesResolver } from './spaces.resolver';

describe('SpacesResolver', () => {
  let resolver: SpacesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SpacesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
