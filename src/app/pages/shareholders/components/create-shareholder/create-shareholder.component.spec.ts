import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateShareholderComponent } from './create-shareholder.component';

describe('CreateShareholderComponent', () => {
  let component: CreateShareholderComponent;
  let fixture: ComponentFixture<CreateShareholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateShareholderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateShareholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
