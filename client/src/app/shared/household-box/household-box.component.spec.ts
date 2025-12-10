import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholdBoxComponent } from './household-box.component';

describe('HouseholdBoxComponent', () => {
  let component: HouseholdBoxComponent;
  let fixture: ComponentFixture<HouseholdBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseholdBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseholdBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
