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
    new ServicePricingModel('Програмний ремонт (прошивка)', 'від 200 грн'),
    new ServicePricingModel('Ремонт (заміна) роз\'єму зарядки', 'від 300 грн'),
    new ServicePricingModel('Ремонт (заміна) динаміка', 'від 400 грн'),
    new ServicePricingModel('Заміна LCD екрану, сенсорного скла, тачскріну', 'від 700 грн'),
    new ServicePricingModel('Ремонт після попадання вологи', 'від 500 грн'),
  ];
}
