import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCabinetButtonComponent } from './add-cabinet-button.component';

describe('AddCabinetButtonComponent', () => {
  let component: AddCabinetButtonComponent;
  let fixture: ComponentFixture<AddCabinetButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCabinetButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCabinetButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
