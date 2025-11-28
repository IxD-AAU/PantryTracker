import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterRecipeButtonComponent } from './filter-recipe-button.component';

describe('FilterRecipeButtonComponent', () => {
  let component: FilterRecipeButtonComponent;
  let fixture: ComponentFixture<FilterRecipeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterRecipeButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterRecipeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
