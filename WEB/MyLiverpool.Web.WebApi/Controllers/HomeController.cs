using System.Web.Mvc;

namespace MyLiverpool.Web.WebApi.Controllers
{
    [AllowAnonymous]
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}