import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScannerButtonComponent } from './scanner-button.component';

describe('ScannerButtonComponent', () => {
  let component: ScannerButtonComponent;
  let fixture: ComponentFixture<ScannerButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScannerButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScannerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
