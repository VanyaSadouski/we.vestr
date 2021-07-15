import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { StocksControllerService } from './stocks-controller.service';

describe('StocksControllerService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
  );

  it('should be created', () => {
    const service: StocksControllerService = TestBed.get(
      StocksControllerService
    );
    expect(service).toBeTruthy();
  });
});
