import {
  async,
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { ShareholdersComponent } from './shareholders.component';
import { ShareholdersModuleTestingModule } from './shareholders.module.testing';

describe('ShareholdersComponent', () => {
  let component: ShareholdersComponent;
  let fixture: ComponentFixture<ShareholdersComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule(
        ShareholdersModuleTestingModule
      ).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareholdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
