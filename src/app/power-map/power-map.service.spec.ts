import { TestBed, inject } from '@angular/core/testing';

import { PowerMapService } from './power-map.service';

describe('PowerMapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PowerMapService]
    });
  });

  it('should ...', inject([PowerMapService], (service: PowerMapService) => {
    expect(service).toBeTruthy();
  }));
});
