import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIPLineComponent } from './aip-line.component';

describe('AIPLineComponent', () => {
  let component: AIPLineComponent;
  let fixture: ComponentFixture<AIPLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AIPLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AIPLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
