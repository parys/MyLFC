using Microsoft.AspNetCore.Mvc;

namespace MyLiverpool.Web.Mvc.Controllers
{
    public class PersonsController : Controller
    {
        public IActionResult Squad()
        {
            return View();
        }
    }
}