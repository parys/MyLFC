using Microsoft.AspNetCore.Mvc;


namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Home controller.
    /// </summary>
    public class HomeController : Controller
    {
        /// <summary>
        /// Returns index wiew with prerended view.
        /// </summary>
        /// <returns></returns>
        public IActionResult Index()
        {
            return View();
        }
    }
}
