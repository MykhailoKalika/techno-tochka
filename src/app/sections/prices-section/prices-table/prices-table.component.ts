import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ServicePricingModel} from "../../../models/service.model";

@Component({
  selector: 'app-prices-table',
  standalone: true,
  templateUrl: './prices-table.component.html',
  styleUrl: './prices-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PricesTableComponent {
  pricings: ServicePricingModel[] = [
    new ServicePricingModel('Програмний ремонт (прошивка)', '650-850'),
    new ServicePricingModel('Ремонт (заміна) роз\'єму зарядки', 'від 950 грн'),
    new ServicePricingModel('Ремонт (заміна) динаміка', 'від 950 грн'),
    new ServicePricingModel('Заміна LCD екрану, сенсорного скла, тачскріну', 'від 990 грн'),
    new ServicePricingModel('Ремонт після попадання вологи', 'від 1190 грн'),
  ];
}
