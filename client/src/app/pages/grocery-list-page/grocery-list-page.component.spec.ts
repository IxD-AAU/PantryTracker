import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryListPageComponent } from './grocery-list-page.component';

describe('GroceryListPageComponent', () => {
  let component: GroceryListPageComponent;
  let fixture: ComponentFixture<GroceryListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroceryListPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroceryListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
