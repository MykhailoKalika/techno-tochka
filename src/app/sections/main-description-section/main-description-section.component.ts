import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ComfortComponent} from "./comfort/comfort.component";
import {InstructionComponent} from "./instruction/instruction.component";

@Component({
  selector: 'app-main-description-section',
  standalone: true,
  imports: [
    ComfortComponent,
    InstructionComponent
  ],
  templateUrl: './main-description-section.component.html',
  styleUrl: './main-description-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainDescriptionSectionComponent {
}
