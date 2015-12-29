using System.Threading.Tasks;
using System.Web.Mvc;
using MyLiverpool.Controllers;
using MyLiverpoolSite.Business.Contracts;

namespace MyLiverpool.Web.WebApi.Controllers
{
    public class HomeController : BaseController
    {
        private readonly INewsService _newsService;

        public HomeController()
        {
          //  _newsService = newsService;
        }

        public async Task<ActionResult> Index()
        {
           // var model = await _newsService.GetAllAsync(1, null);
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}