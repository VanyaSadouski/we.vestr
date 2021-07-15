import { TestBed } from '@angular/core/testing';
import { ShareholdersModuleTestingModule } from '@pages/shareholders/shareholders.module.testing';

import { ShareholderResolver } from './shareholder-resolver.service';

describe('ShareholderResolver', () => {
  beforeEach(() =>
    TestBed.configureTestingModule(ShareholdersModuleTestingModule)
  );

  it('should be created', () => {
    const service: ShareholderResolver = TestBed.get(ShareholderResolver);
    expect(service).toBeTruthy();
  });
});
