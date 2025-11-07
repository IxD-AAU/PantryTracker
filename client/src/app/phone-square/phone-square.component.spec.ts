import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneSquareComponent } from './phone-square.component';

describe('PhoneSquareComponent', () => {
  let component: PhoneSquareComponent;
  let fixture: ComponentFixture<PhoneSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneSquareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
