import {inject, Renderer2, RendererFactory2} from "@angular/core";
import {Observable, ReplaySubject} from "rxjs";
import {IWidgetLoader} from "../../interfaces/widget-loader.interface";

export abstract class WidgetLoaderAbstractService implements IWidgetLoader {

  private renderer: Renderer2 = inject(RendererFactory2).createRenderer(null, null);

  private _widgetElement: ReplaySubject<Node> = new ReplaySubject<Node>(1);
  public readonly widgetElement$: Observable<Node> = this._widgetElement.asObservable()

  protected abstract widgetUrl: string;

  public loadWidget(): void {
    this.observeWidgetAdding();
    this.loadScript()
      .catch((error) => console.error('Error loading script:', error));
  }

  private loadScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      const script = this.renderer.createElement('script');
      script.src = this.widgetUrl;
      script.async = true;

      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load script: ${this.widgetUrl}`));

      this.renderer.appendChild(document.body, script);
    });
  }

  private observeWidgetAdding(): void {
    const context = this;
    const originalInsertBefore = HTMLBodyElement.prototype.insertBefore;
    const body = document.body;

    // @ts-ignore
    body.insertBefore = function (newChild: Node, referenceChild: Node) {
      // removing of the observing
      body.insertBefore = originalInsertBefore;

      context._widgetElement.next(newChild);
      return originalInsertBefore.call(this, newChild, referenceChild);
    };
  }
}
