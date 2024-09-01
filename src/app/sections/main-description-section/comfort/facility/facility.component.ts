import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FacilityModel} from "../../../../models/facility.model";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-facility',
  standalone: true,
  templateUrl: './facility.component.html',
  styleUrl: './facility.component.scss',
  imports: [
    NgOptimizedImage
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FacilityComponent {
  @Input({required: true}) facility!: FacilityModel;
}
