import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

  scrollTo(id: string, option: ScrollLogicalPosition = 'start'): void {
    const element = document.getElementById(id) as HTMLElement;
    if (element) {
      element.scrollIntoView({block: option});
    }
  }
}
