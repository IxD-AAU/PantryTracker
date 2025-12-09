import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseCabinetComponent } from './choose-cabinet.component';

describe('ChooseCabinetComponent', () => {
  let component: ChooseCabinetComponent;
  let fixture: ComponentFixture<ChooseCabinetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseCabinetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseCabinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
