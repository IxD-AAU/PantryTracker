import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRecipeButtonComponent } from './all-recipe-button.component';

describe('AllRecipeButtonComponent', () => {
  let component: AllRecipeButtonComponent;
  let fixture: ComponentFixture<AllRecipeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllRecipeButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllRecipeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
