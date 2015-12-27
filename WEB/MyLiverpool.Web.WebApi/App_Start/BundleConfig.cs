using System.Web;
using System.Web.Optimization;

namespace MyLiverpool.Web.WebApi
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Content/css").Include(
          "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/bundles/App")
                .IncludeDirectory("~/Scripts/Controllers", "*.js")
                .IncludeDirectory("~/Scripts/Factories", "*.js")
                .IncludeDirectory("~/Scripts/Services", "*.js")
                .Include("~/Scripts/App.js"));

            BundleTable.EnableOptimizations = false;
        }
    }
}
