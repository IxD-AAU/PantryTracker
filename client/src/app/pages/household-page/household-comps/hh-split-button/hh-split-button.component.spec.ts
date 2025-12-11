import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HhSplitButtonComponent } from './hh-split-button.component';

describe('HhSplitButtonComponent', () => {
  let component: HhSplitButtonComponent;
  let fixture: ComponentFixture<HhSplitButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HhSplitButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HhSplitButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
