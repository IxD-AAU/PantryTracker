import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemPopupMComponent } from './add-item-popup-m.component';

describe('AddItemPopupMComponent', () => {
  let component: AddItemPopupMComponent;
  let fixture: ComponentFixture<AddItemPopupMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddItemPopupMComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddItemPopupMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
