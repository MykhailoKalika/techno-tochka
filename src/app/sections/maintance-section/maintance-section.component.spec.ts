import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintanceSectionComponent } from './maintance-section.component';

describe('MaintanceSectionComponent', () => {
  let component: MaintanceSectionComponent;
  let fixture: ComponentFixture<MaintanceSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaintanceSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintanceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
