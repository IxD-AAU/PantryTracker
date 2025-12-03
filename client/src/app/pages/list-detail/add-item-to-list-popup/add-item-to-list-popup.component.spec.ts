import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemToListPopupComponent } from './add-item-to-list-popup.component';

describe('AddItemToListPopupComponent', () => {
  let component: AddItemToListPopupComponent;
  let fixture: ComponentFixture<AddItemToListPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddItemToListPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddItemToListPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
