import { TestBed, inject } from '@angular/core/testing';

import { PropertyAnalysisService } from './property-analysis.service';

describe('PropertyAnalysisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropertyAnalysisService]
    });
  });

  it('should ...', inject([PropertyAnalysisService], (service: PropertyAnalysisService) => {
    expect(service).toBeTruthy();
  }));
});
