using System.Web.Optimization;

namespace MyLiverpool.Web.WebApi
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Content/css")
                .IncludeDirectory("~/Content/", "*.css", false)
                .IncludeDirectory("~/Content/markitup/", "*.css"));
            //    .Include("~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/bundles/App")
                .Include("~/Scripts/jquery-{version}.js")
                .Include("~/Scripts/jquery.markitup.js")
                .Include("~/Scripts/bootstrap.js")
                .Include("~/Scripts/angular.js")
                .Include("~/Scripts/angular-translate.js")
                .Include("~/Scripts/angular-animate.js")
                .Include("~/Scripts/angular-breadcrumb.js")
                .Include("~/Scripts/angular-touch.js")
                .Include("~/Scripts/loading-bar.js")
                .IncludeDirectory("~/Scripts/angular", "*.js", false) // static file loader
                .Include("~/Scripts/angular-ui/ui-bootstrap.js")
                .Include("~/Scripts/angular-ui/ui-bootstrap-tpls.js")
                .Include("~/Scripts/angular-validation/angular-validation.min.js") //ngroute before?
                .Include("~/Scripts/angular-mocks.js") //ngroute before?
                .Include("~/Scripts/angular-ui-router.js")
                .Include("~/Scripts/ng-file-upload-shim.js")
                .Include("~/Scripts/ng-file-upload.js")
                .Include("~/App/App.js")
                .Include("~/App/account/accountFactory.js")
                .Include("~/App/Services/SessionService.js")
                .IncludeDirectory("~/App/Factories", "*.js")
                .Include("~/App/Services/AuthenticationService.js")
                .IncludeDirectory("~/App/home", "*.js")
                .IncludeDirectory("~/App/account", "*.js")
                .IncludeDirectory("~/App/filters", "*.js")
                .IncludeDirectory("~/App/forum", "*.js")
                .IncludeDirectory("~/App/images", "*.js")
                .IncludeDirectory("~/App/markitup", "*.js")
                .IncludeDirectory("~/App/modal", "*.js")
                .IncludeDirectory("~/App/News/", "*.js")
                .IncludeDirectory("~/App/NewsCategory/", "*.js")
                .IncludeDirectory("~/App/NewsComment/", "*.js")
                .IncludeDirectory("~/App/Pm/", "*.js")
                .IncludeDirectory("~/App/RoleGroups/", "*.js")
                .IncludeDirectory("~/App/Users/", "*.js")
                .Include("~/App/Configuration.js")

                );

            BundleTable.EnableOptimizations = false;
            
        }
    }
}
