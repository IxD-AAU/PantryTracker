import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetItemComponent } from './cabinet-item.component';

describe('CabinetItemComponent', () => {
  let component: CabinetItemComponent;
  let fixture: ComponentFixture<CabinetItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabinetItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabinetItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
