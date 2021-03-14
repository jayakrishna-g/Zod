import { TestBed } from '@angular/core/testing';

import { QuestionDescriptionResolver } from './question-description.resolver';

describe('QuestionDescriptionResolver', () => {
  let resolver: QuestionDescriptionResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(QuestionDescriptionResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
