import { TestBed } from '@angular/core/testing';

import { ReviewsWidgetLoadingService } from './reviews-widget-loading.service';

describe('ReviewsWidgetLoaderService', () => {
  let service: ReviewsWidgetLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewsWidgetLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
