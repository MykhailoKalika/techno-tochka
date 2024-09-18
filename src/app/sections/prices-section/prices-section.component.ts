import { Component } from '@angular/core';
import {PricesTableComponent} from "./prices-table/prices-table.component";

@Component({
  selector: 'app-prices-section',
  standalone: true,
  imports: [
    PricesTableComponent
  ],
  templateUrl: './prices-section.component.html',
  styleUrl: './prices-section.component.scss'
})
export class PricesSectionComponent {

}
