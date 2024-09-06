import {Observable} from "rxjs";

export interface IWidgetLoader {
  get widgetElement$(): Observable<Node>;
  loadWidget(): void;
}
