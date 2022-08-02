import { TestBed } from '@angular/core/testing';

import { VoteeService } from './vote.service';

describe('VoteeService', () => {
  let service: VoteeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoteeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
