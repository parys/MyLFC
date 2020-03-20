import {
    ComponentFactoryResolver,
    ComponentRef,
    Injectable,
    Injector,
    Type,
    Compiler
} from '@angular/core';
import { DynamicContentOutletErrorComponent } from './dynamic-content-outlet-error.component';
import { DynamicContentOutletRegistry } from './dynamic-content-outlet.registry';

type ModuleWithDynamicComponents = Type<any> & {
    dynamicComponentsMap: {};
};

@Injectable()
export class DynamicContentOutletService {
    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private compiler: Compiler,
        private injector: Injector
    ) { }

    async GetComponent(componentName: string): Promise<ComponentRef<any>> {

        try {
            const lazyModule = await this.getModuleImport(componentName);

            const ngModuleFactory = await this.compiler.compileModuleAndAllComponentsAsync(lazyModule);

            const moduleRef = ngModuleFactory.ngModuleFactory.create(this.injector);

            const componentType = (ngModuleFactory.ngModuleFactory.moduleType as ModuleWithDynamicComponents)
                .dynamicComponentsMap[componentName];

            const componentFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(componentType);
            return componentFactory.create(this.injector);
        } catch (error) {
            return this.getDynamicContentErrorComponent(
                // `Unable to load module ${modulePath}.
                ` Looked up using component: ${componentName}. Error Details: ${
                error.message
                }`
            );
        }
    }

    private getModuleImport(componentName: string) {
        const registryItem = DynamicContentOutletRegistry.find(
            i => i.componentName === componentName
        );

        if (registryItem) {
            return registryItem.module;
        }
    }

    private getDynamicContentErrorComponent(errorMessage: string) {
        const factory = this.componentFactoryResolver.resolveComponentFactory(
            DynamicContentOutletErrorComponent
        );
        const componentRef = factory.create(this.injector);
        const instance = componentRef.instance as any;
        instance.errorMessage = errorMessage;
        return componentRef;
    }
}
