import { ChangeDetectionStrategy, Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-nav-panel',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './nav-panel.component.html',
  styleUrl: './nav-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavPanelComponent {

}
