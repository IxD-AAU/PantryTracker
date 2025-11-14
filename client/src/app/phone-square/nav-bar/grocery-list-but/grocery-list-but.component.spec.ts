import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryListButComponent } from './grocery-list-but.component';

describe('GroceryListButComponent', () => {
  let component: GroceryListButComponent;
  let fixture: ComponentFixture<GroceryListButComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroceryListButComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroceryListButComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
