import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComfortComponent } from './comfort.component';

describe('ComfortComponent', () => {
  let component: ComfortComponent;
  let fixture: ComponentFixture<ComfortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComfortComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComfortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
