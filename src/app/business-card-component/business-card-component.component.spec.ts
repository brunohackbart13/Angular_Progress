import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCardComponentComponent } from './business-card-component.component';

describe('BusinessCardComponentComponent', () => {
  let component: BusinessCardComponentComponent;
  let fixture: ComponentFixture<BusinessCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessCardComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
