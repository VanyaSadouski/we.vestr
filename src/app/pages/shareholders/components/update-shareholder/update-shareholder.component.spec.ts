import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateShareholderComponent } from './update-shareholder.component';

describe('UpdateShareholderComponent', () => {
  let component: UpdateShareholderComponent;
  let fixture: ComponentFixture<UpdateShareholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateShareholderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateShareholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
