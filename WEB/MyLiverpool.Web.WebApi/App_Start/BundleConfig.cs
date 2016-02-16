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
                .Include("~/Scripts/angular.js")
                .Include("~/Scripts/angular-translate.js")
                .IncludeDirectory("~/Scripts/angular", "*.js", false) //angular translate + static file loader
                .Include("~/Scripts/angular-ui/ui-bootstrap.js")
                .Include("~/Scripts/angular-ui/ui-bootstrap-tpls.js")
                .Include("~/Scripts/angular-validation/angular-validation.min.js") //ngroute before?
                .Include("~/Scripts/angular-mocks.js") //ngroute before?
                .Include("~/Scripts/angular-ui-router.js")
                .IncludeDirectory("~/Scripts/objects", "*.js", true)
                .IncludeDirectory("~/Scripts/Controllers", "*.js")
                .IncludeDirectory("~/Scripts/Factories", "*.js")
                .IncludeDirectory("~/Scripts/Services", "*.js")
                .Include("~/Scripts/App.js"));

            BundleTable.EnableOptimizations = false;
        }
    }
}
