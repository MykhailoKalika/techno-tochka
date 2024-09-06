import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FacilityComponent} from "./facility/facility.component";
import {NgForOf} from "@angular/common";
import {IFacility} from "../../../interfaces/facility.interface";

@Component({
  selector: 'app-comfort',
  standalone: true,
  imports: [
    FacilityComponent,
    NgForOf
  ],
  templateUrl: './comfort.component.html',
  styleUrl: './comfort.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComfortComponent {
  facilities: IFacility[] = [
    {
      icon: '/assets/icons/gpay-icon.png',
      title: 'Безготівковий розрахунок',
      text: 'Забезпечує швидкість та ефективність операцій, а також підвищує рівень безпеки та зручності для клієнтів'
    },
    {
      icon: '/assets/icons/message-icon.png',
      title: 'Зв’язок з майстром',
      text: 'Забезпечуємо швидке вирішення проблем та високу якість обслуговування для задоволення потреб клієнтів'
    },
    {
      icon: '/assets/icons/play-icon.png',
      title: 'Спостерігання за ремонтом в режимі онлайн',
      text: 'Забезпечує прозорість, впевненість та зручність для клієнтів, дозволяючи бути в курсі кожного етапу робіт над вашим обладнанням'
    },
  ];
}
