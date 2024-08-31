import { ChangeDetectionStrategy, Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-instruction',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './instruction.component.html',
  styleUrl: './instruction.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InstructionComponent {

}
