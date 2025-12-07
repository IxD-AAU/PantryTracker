import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendButtonComponent } from './recommend-button.component';

describe('RecommendButtonComponent', () => {
  let component: RecommendButtonComponent;
  let fixture: ComponentFixture<RecommendButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
