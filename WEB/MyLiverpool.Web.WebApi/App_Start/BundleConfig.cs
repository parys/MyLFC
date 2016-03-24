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
                .Include("~/Scripts/loading-bar.js")
                .IncludeDirectory("~/Scripts/angular", "*.js", false) // static file loader
                .Include("~/Scripts/angular-ui/ui-bootstrap.js")
                .Include("~/Scripts/angular-ui/ui-bootstrap-tpls.js")
                .Include("~/Scripts/angular-validation/angular-validation.min.js") //ngroute before?
                .Include("~/Scripts/angular-mocks.js") //ngroute before?
                .Include("~/Scripts/angular-ui-router.js")
                .Include("~/Scripts/ng-file-upload-shim.js")
                .Include("~/Scripts/ng-file-upload.js")
                      .Include("~/Scripts/App.js")
                .Include("~/Scripts/objects/account/accountFactory.js")
                .Include("~/Scripts/Services/SessionService.js")
                .Include("~/Scripts/Services/AuthenticationService.js")
                .Include("~/Scripts/Factories/Application.js")
                .Include("~/Scripts/Factories/RouteFilter.js")
               
                //.IncludeDirectory("~/Scripts/Factories", "*.js")
                //     .IncludeDirectory("~/Scripts/objects/account", "*.js")
                //      .IncludeDirectory("~/Scripts/objects", "*.js", true)
               // .IncludeDirectory("~/Scripts/Services", "*.js")
              //     .IncludeDirectory("~/Scripts/Controllers", "*.js")
                   .Include("~/Scripts/Controllers/LandingPageController.js")
                   .Include("~/Scripts/Controllers/leftContainerCtrl.js")
                   .Include("~/Scripts/Controllers/rightContainerCtrl.js")


                );

            BundleTable.EnableOptimizations = false;
        }
    }
}
