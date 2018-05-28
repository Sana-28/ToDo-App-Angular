import { TestBed, inject } from '@angular/core/testing';

import { LabelserviceService } from './labelservice.service';

describe('LabelserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LabelserviceService]
    });
  });

  it('should be created', inject([LabelserviceService], (service: LabelserviceService) => {
    expect(service).toBeTruthy();
  }));
});
