import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-reviews-component',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewsComponent {

}