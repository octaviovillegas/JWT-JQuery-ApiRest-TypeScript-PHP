import { TestBed, inject } from '@angular/core/testing';

import { VerificarJWTService } from './verificar-jwt.service';

describe('VerificarJWTService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerificarJWTService]
    });
  });

  it('should ...', inject([VerificarJWTService], (service: VerificarJWTService) => {
    expect(service).toBeTruthy();
  }));
});
