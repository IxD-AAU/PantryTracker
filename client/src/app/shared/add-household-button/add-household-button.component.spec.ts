import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHouseholdButtonComponent } from './add-household-button.component';

describe('AddHouseholdButtonComponent', () => {
  let component: AddHouseholdButtonComponent;
  let fixture: ComponentFixture<AddHouseholdButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddHouseholdButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHouseholdButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
