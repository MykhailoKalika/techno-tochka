import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-instruction',
  standalone: true,
  imports: [],
  templateUrl: './instruction.component.html',
  styleUrl: './instruction.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InstructionComponent {

}
