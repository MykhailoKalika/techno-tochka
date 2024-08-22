import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-popular-questions',
  standalone: true,
  imports: [],
  templateUrl: './popular-questions.component.html',
  styleUrl: './popular-questions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopularQuestionsComponent {

}
