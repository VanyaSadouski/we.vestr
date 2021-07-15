import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ShareholdersControllerService } from './shareholders-controller.service';

describe('ShareholdersControllerService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
  );

  it('should be created', () => {
    const service: ShareholdersControllerService = TestBed.get(
      ShareholdersControllerService
    );
    expect(service).toBeTruthy();
  });
});
