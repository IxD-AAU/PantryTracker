import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HhSingleButtonComponent } from './hh-single-button.component';

describe('HhSingleButtonComponent', () => {
  let component: HhSingleButtonComponent;
  let fixture: ComponentFixture<HhSingleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HhSingleButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HhSingleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
