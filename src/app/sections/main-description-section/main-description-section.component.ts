import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-main-description-section',
  standalone: true,
  imports: [],
  templateUrl: './main-description-section.component.html',
  styleUrl: './main-description-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainDescriptionSectionComponent {
}
