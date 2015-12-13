using System.Threading.Tasks;
using MyLiverpoolSite.Business.Contracts;
using System.Web.Mvc;

namespace MyLiverpool.Controllers
{
    public class HomeController : BaseController
    {
        private readonly INewsService _newsService;

        public HomeController(INewsService newsService)
        {
            _newsService = newsService;
        }

        public async Task<ActionResult> Index()
        {
            var model = await _newsService.GetAllAsync(1, null);
            return View(model);
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