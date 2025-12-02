import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemPageComponent } from './add-item-page.component';

describe('AddItemPageComponent', () => {
  let component: AddItemPageComponent;
  let fixture: ComponentFixture<AddItemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddItemPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
