import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CountableAdvertFactModel} from "../../../models/countable-advert-fact.model";

@Component({
  selector: 'app-countable-fact',
  standalone: true,
  templateUrl: './countable-fact.component.html',
  styleUrl: './countable-fact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountableFactComponent {
  @Input({required: true}) fact!: CountableAdvertFactModel;
}
