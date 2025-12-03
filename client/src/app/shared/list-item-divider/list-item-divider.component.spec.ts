import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemDividerComponent } from './list-item-divider.component';

describe('ListItemDividerComponent', () => {
  let component: ListItemDividerComponent;
  let fixture: ComponentFixture<ListItemDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListItemDividerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListItemDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
