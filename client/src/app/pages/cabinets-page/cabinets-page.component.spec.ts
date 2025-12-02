import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetsPageComponent } from './cabinets-page.component';

describe('CabinetsPageComponent', () => {
  let component: CabinetsPageComponent;
  let fixture: ComponentFixture<CabinetsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabinetsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabinetsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
