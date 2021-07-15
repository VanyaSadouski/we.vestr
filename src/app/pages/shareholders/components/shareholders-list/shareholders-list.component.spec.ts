import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShareholdersModuleTestingModule } from '@pages/shareholders/shareholders.module.testing';

import { ShareholdersListComponent } from './shareholders-list.component';

describe('ShareholdersListComponent', () => {
  let component: ShareholdersListComponent;
  let fixture: ComponentFixture<ShareholdersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(
      ShareholdersModuleTestingModule
    ).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareholdersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
