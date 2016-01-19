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
                .IncludeDirectory("~/Scripts/angular", "*.js", false)
                .IncludeDirectory("~/Scripts/Controllers", "*.js")
                .IncludeDirectory("~/Scripts/Factories", "*.js")
                .IncludeDirectory("~/Scripts/Services", "*.js")
                .IncludeDirectory("~/Scripts/Directives", "*.js")
                .Include("~/Scripts/App.js"));

            BundleTable.EnableOptimizations = false;
        }
    }
}
