import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeButComponent } from './home-but.component';

describe('HomeButComponent', () => {
  let component: HomeButComponent;
  let fixture: ComponentFixture<HomeButComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeButComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeButComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
