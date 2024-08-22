import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {NavPanelComponent} from "./nav-panel/nav-panel.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-header-section',
  standalone: true,
  templateUrl: './header-section.component.html',
  styleUrl: './header-section.component.scss',
  imports: [
    NavPanelComponent,
    NgOptimizedImage
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderSectionComponent {
}
