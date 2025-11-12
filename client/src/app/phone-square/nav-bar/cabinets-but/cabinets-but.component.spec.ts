import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetsButComponent } from './cabinets-but.component';

describe('CabinetsButComponent', () => {
  let component: CabinetsButComponent;
  let fixture: ComponentFixture<CabinetsButComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabinetsButComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabinetsButComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
