import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualAddButtonComponent } from './manual-add-button.component';

describe('ManualAddButtonComponent', () => {
  let component: ManualAddButtonComponent;
  let fixture: ComponentFixture<ManualAddButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManualAddButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManualAddButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
