import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholdButComponent } from './household-but.component';

describe('HouseholdButComponent', () => {
  let component: HouseholdButComponent;
  let fixture: ComponentFixture<HouseholdButComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseholdButComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseholdButComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
