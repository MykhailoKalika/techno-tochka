class ServiceModel {
  serviceTitle: string;

  constructor(serviceTitle: string) {
    this.serviceTitle = serviceTitle;
  }
}

export class ServicePricingModel extends ServiceModel {
  priceTitle: string;

  constructor(serviceTitle: string, price: string) {
    super(serviceTitle);
    this.priceTitle = price;
  }
}
