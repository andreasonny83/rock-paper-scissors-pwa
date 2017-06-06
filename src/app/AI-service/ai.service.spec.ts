import { TestBed, inject } from '@angular/core/testing';

import { AIService } from './ai.service';

describe('AIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AIService]
    });
  });

  it('should be created', inject([AIService], (service: AIService) => {
    expect(service).toBeTruthy();
  }));
});
