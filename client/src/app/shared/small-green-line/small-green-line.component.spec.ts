import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallGreenLineComponent } from './small-green-line.component';

describe('SmallGreenLineComponent', () => {
  let component: SmallGreenLineComponent;
  let fixture: ComponentFixture<SmallGreenLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallGreenLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallGreenLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
