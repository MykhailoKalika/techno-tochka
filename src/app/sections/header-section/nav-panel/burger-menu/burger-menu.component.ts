import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {MatIconButton} from "@angular/material/button";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatIcon} from "@angular/material/icon";
import {NgOptimizedImage} from "@angular/common";
import {MatTooltip} from "@angular/material/tooltip";
import {CdkCopyToClipboard} from "@angular/cdk/clipboard";

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [
    MatIconButton,
    MatMenuTrigger,
    MatIcon,
    MatMenu,
    MatMenuItem,
    NgOptimizedImage,
    MatTooltip,
    CdkCopyToClipboard
  ],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BurgerMenuComponent {

  @Output() copyingSuccess: EventEmitter<void> = new EventEmitter();

  copyingSuccessMessage() {
    this.copyingSuccess.emit();
  }
}
