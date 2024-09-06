import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ReviewsWidgetLoadingService} from "../../services/widget-loaders/reviews-widget-loading.service";
import {take} from "rxjs";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss',
  standalone: true,
  providers: [ReviewsWidgetLoadingService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewsComponent implements OnInit, AfterViewInit {

  @ViewChild('reviewsWidgetContainer') readonly widgetContainer!: ElementRef;

  constructor(
    private reviewsWidgetLoader: ReviewsWidgetLoadingService,
  ) {}

  ngOnInit(): void {
    this.reviewsWidgetLoader.loadWidget();
  }

  ngAfterViewInit(): void {
    this.reviewsWidgetLoader.widgetElement$.pipe(take(1)).subscribe((element: Node) => {
      queueMicrotask(() => this.widgetContainer.nativeElement.append(element))
    });
  }
}
