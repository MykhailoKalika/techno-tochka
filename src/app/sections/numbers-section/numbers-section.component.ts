import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-numbers-section',
  standalone: true,
  imports: [],
  templateUrl: './numbers-section.component.html',
  styleUrl: './numbers-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumbersSectionComponent {

}
