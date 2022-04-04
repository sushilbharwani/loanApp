import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { LoanService } from './loan.service';

describe('LoanService', () => {
  let service: LoanService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule  ]
    })
    .compileComponents();
  });
 
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
