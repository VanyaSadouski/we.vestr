import { TestBed } from '@angular/core/testing';
import { ShareholdersModuleTestingModule } from '@pages/shareholders/shareholders.module.testing';

import { ShareholdersListResolver } from './shareholders-list-resolver.service';

describe('ShareholdersListResolver', () => {
  beforeEach(() =>
    TestBed.configureTestingModule(ShareholdersModuleTestingModule)
  );

  it('should be created', () => {
    const service: ShareholdersListResolver = TestBed.get(
      ShareholdersListResolver
    );
    expect(service).toBeTruthy();
  });
});
