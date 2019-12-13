interface RegistryItem {
    componentName: string;
    modulePath: string;
    moduleName: string;
}
/** A registry array of Component Name to details
 * that must be updated with each new component
 * that you wish to load dynamically.
 */
export const DynamicContentOutletRegistry: RegistryItem[] = [
    {
        componentName: 'SidebarLeftComponent',
        modulePath: 'src/app/layout/modules/sidebar-left/sidebar-left.module',
        moduleName: 'SidebarLeftModule'
      },
      {
        componentName: 'SidebarRightComponent',
        modulePath: 'src/app/layout/modules/sidebar-right/sidebar-right.module',
        moduleName: 'SidebarRightModule'
      },
];
