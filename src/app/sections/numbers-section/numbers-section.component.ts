import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ICountableAdvertFact} from "../../interfaces/countable-advert-fact.interface";
import {CountableFactComponent} from "./countable-fact/countable-fact.component";

@Component({
  selector: 'app-numbers-section',
  standalone: true,
  templateUrl: './numbers-section.component.html',
  styleUrl: './numbers-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CountableFactComponent
  ]
})
export class NumbersSectionComponent {
  public facts: ICountableAdvertFact[] = [
    {number: '11 років', description: 'займаємося ремонтом техніки'},
    {number: '20 102', description: 'відремонтованих пристроїв'},
    {number: '70%', description: 'техніки ремонтується протягом одного дня'},
    {number: '95%', description: 'клієнтів стають постійними рекомендують друзям'},
  ];
}
