import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeButComponent } from './recipe-but.component';

describe('RecipeButComponent', () => {
  let component: RecipeButComponent;
  let fixture: ComponentFixture<RecipeButComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeButComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeButComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
