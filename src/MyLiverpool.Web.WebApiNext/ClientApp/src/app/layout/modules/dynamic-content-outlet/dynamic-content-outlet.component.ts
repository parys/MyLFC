import {
    Component,
    ComponentRef,
    Input,
    OnChanges,
    OnDestroy,
    ViewChild,
    ViewContainerRef
} from '@angular/core';
import { DynamicContentOutletService } from './dynamic-content-outlet.service';

@Component({
    selector: 'app-dynamic-content-outlet',
    template: `
      <ng-container #container></ng-container>
    `
})
export class DynamicContentOutletComponent implements OnDestroy, OnChanges {
    @ViewChild('container', { read: ViewContainerRef, static: false })
    container: ViewContainerRef;

    @Input() componentName: string;

    private component: ComponentRef<{}>;

    constructor(private dynamicContentService: DynamicContentOutletService) { }

    async ngOnChanges() {
        console.warn('ngOnChanges');
        await this.renderComponent();
    }

    ngOnDestroy() {
        this.destroyComponent();
    }

    private async renderComponent() {
        this.destroyComponent();

        this.component = await this.dynamicContentService.GetComponent(
            this.componentName
        );
        this.container.insert(this.component.hostView);
    }

    private destroyComponent() {
        if (this.component) {
            this.component.destroy();
            this.component = null;
        }
    }
}
