import {Injectable} from '@angular/core';
import {IWidgetLoader} from "../../interfaces/widget-loader.interface";
import {WidgetLoaderAbstractService} from "./widget-loader.abstract-service";

@Injectable()
export class ReviewsWidgetLoadingService extends WidgetLoaderAbstractService implements IWidgetLoader {
  protected widgetUrl: string = 'https://widget.trustmary.com/JVKLLj6b7';
}
