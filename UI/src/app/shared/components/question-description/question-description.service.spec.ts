import { TestBed } from '@angular/core/testing';

import { QuestionDescriptionService } from './question-description.service';

describe('QuestionDescriptionService', () => {
  let service: QuestionDescriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionDescriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
