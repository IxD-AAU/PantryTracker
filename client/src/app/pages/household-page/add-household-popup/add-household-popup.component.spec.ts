import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHouseholdPopupComponent } from './add-household-popup.component';

describe('AddHouseholdPopupComponent', () => {
  let component: AddHouseholdPopupComponent;
  let fixture: ComponentFixture<AddHouseholdPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddHouseholdPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHouseholdPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
