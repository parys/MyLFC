using System.Web.Mvc;

namespace MyLiverpool.Web.WebApi.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}