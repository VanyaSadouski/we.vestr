import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShareholdersModuleTestingModule } from '@pages/shareholders/shareholders.module.testing';

import { ShareholderFormComponent } from './shareholder-form.component';

describe('ShareholderFormComponent', () => {
  let component: ShareholderFormComponent;
  let fixture: ComponentFixture<ShareholderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(
      ShareholdersModuleTestingModule
    ).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareholderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
