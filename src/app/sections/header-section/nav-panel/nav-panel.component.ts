import { ChangeDetectionStrategy, Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {BurgerMenuComponent} from "./burger-menu/burger-menu.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CdkCopyToClipboard} from "@angular/cdk/clipboard";

@Component({
  selector: 'app-nav-panel',
  standalone: true,
  imports: [
    NgOptimizedImage,
    BurgerMenuComponent,
    CdkCopyToClipboard
  ],
  templateUrl: './nav-panel.component.html',
  styleUrl: './nav-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavPanelComponent {

  constructor(private snackBar: MatSnackBar) {}

  copyingSuccessMessage() {
    this.snackBar.open('Номер скопійовано!', 'Закрити', {
      duration: 2000,
    });
  }

  redirectToGoogleMaps() {
    window.location.href = 'https://maps.app.goo.gl/dgAbar66E4MbJChJ9';
  }

  scrollTo(id: string): void {
    const element = document.getElementById(id) as HTMLElement;
    if (element) {
      element.scrollIntoView({block: 'start'});
    }
  }
}
