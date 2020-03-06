import {
    Component,
    ComponentRef,
    Input,
    OnChanges,
    OnDestroy,
    ViewChild,
    ViewContainerRef,
    ChangeDetectorRef,
    ChangeDetectionStrategy
} from '@angular/core';
import { DynamicContentOutletService } from './dynamic-content-outlet.service';

@Component({
    selector: 'app-dynamic-content-outlet',
    template: `
      <ng-container #container></ng-container>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicContentOutletComponent implements OnDestroy, OnChanges {
    @ViewChild('container', { read: ViewContainerRef, static: true })
    container: ViewContainerRef;

    @Input() componentName: string;

    private component: ComponentRef<{}>;

    constructor(private dynamicContentService: DynamicContentOutletService, private cdr: ChangeDetectorRef) { }

    async ngOnChanges() {
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
        this.cdr.markForCheck();
    }

    private destroyComponent() {
        if (this.component) {
            this.component.destroy();
            this.component = null;
        }
    }
}
