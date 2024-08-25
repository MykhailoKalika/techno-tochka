import { ChangeDetectionStrategy, Component } from '@angular/core';

// class FacilityComponent {
//   icon: string;
//   title: string;
//   text: string
// }

@Component({
  selector: 'app-comfort',
  standalone: true,
  imports: [],
  templateUrl: './comfort.component.html',
  styleUrl: './comfort.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComfortComponent {
  // facilities: FacilityComponent[] = [
  //   {
  //     icon: '',
  //     title: 'Безготівковий розрахунок',
  //     text: 'Забезпечує швидкість та ефективність операцій, а також підвищує рівень безпеки та зручності для клієнтів',
  //   }
  // ]
}
