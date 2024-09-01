import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountableFactComponent } from './countable-fact.component';

describe('CountableFactComponent', () => {
  let component: CountableFactComponent;
  let fixture: ComponentFixture<CountableFactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountableFactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountableFactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
