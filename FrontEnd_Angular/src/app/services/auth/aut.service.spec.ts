import { TestBed, inject } from '@angular/core/testing';

import { AutService } from './aut.service';

describe('AutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutService]
    });
  });

  it('should ...', inject([AutService], (service: AutService) => {
    expect(service).toBeTruthy();
  }));
});
