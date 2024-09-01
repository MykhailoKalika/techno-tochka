import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CountableAdvertFactModel} from "../../models/countable-advert-fact.model";
import {CountableFactComponent} from "./countable-fact/countable-fact.component";

@Component({
  selector: 'app-numbers-section',
  standalone: true,
  templateUrl: './numbers-section.component.html',
  styleUrl: './numbers-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CountableFactComponent
  ]
})
export class NumbersSectionComponent {
  public facts: CountableAdvertFactModel[] = [
    new CountableAdvertFactModel('11 років', 'займаємося ремонтом техніки'),
    new CountableAdvertFactModel('20 102', 'відремонтованих пристроїв станом на лютий 2023 року'),
    new CountableAdvertFactModel('70%', 'техніки ремонтується протягом одного дня'),
    new CountableAdvertFactModel('95%', 'клієнтів стають постійними рекомендують друзям'),
  ];
}
