import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {IActivity} from "../../interfaces/activity.interface";

@Component({
  selector: 'app-waiting',
  standalone: true,
  templateUrl: './waiting.component.html',
  styleUrl: './waiting.component.scss',
  imports: [
    NgOptimizedImage
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WaitingComponent {
  activities: IActivity[] = [
    {
      description: 'Ви можете спостерігати за роботою нашого майстра',
      imageUrl: '/assets/pictures/activity1.png',
    },
    {
      description: 'Випити каву або чай біля сервісного центру',
      imageUrl: '/assets/pictures/activity2.png',
    },
    {
      description: 'Подивитись або придбати додатковий товар',
      imageUrl: '/assets/pictures/activity3.png',
    },
  ];
}
