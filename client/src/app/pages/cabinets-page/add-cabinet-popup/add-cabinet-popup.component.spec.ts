import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCabinetPopupComponent } from './add-cabinet-popup.component';

describe('AddCabinetPopupComponent', () => {
  let component: AddCabinetPopupComponent;
  let fixture: ComponentFixture<AddCabinetPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCabinetPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCabinetPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
