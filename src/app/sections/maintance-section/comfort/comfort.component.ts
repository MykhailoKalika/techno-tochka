import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FacilityComponent} from "./facility/facility.component";
import {NgForOf} from "@angular/common";
import {FacilityModel} from "../../../models/facility.model";

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
  facilities: FacilityModel[] = [
    new FacilityModel('/assets/icons/gpay-icon.png', 'Безготівковий розрахунок',
      'Забезпечує швидкість та ефективність операцій, а також підвищує рівень безпеки та зручності для клієнтів'),
    new FacilityModel('/assets/icons/message-icon.png', 'Безготівковий розрахунок',
      'Забезпечує швидкість та ефективність операцій, а також підвищує рівень безпеки та зручності для клієнтів'),
    new FacilityModel('/assets/icons/play-icon.png', 'Безготівковий розрахунок',
      'Забезпечує швидкість та ефективність операцій, а також підвищує рівень безпеки та зручності для клієнтів'),
  ];
}
