import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetNormalComponent } from './cabinet-normal.component';

describe('CabinetNormalComponent', () => {
  let component: CabinetNormalComponent;
  let fixture: ComponentFixture<CabinetNormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabinetNormalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabinetNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
